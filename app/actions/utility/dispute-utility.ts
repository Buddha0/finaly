"use server"

import prisma from "@/lib/db";
import { DisputeStatus, AssignmentStatus, PaymentStatus, Dispute } from "@prisma/client";

export async function createDispute(
  assignmentId: string,
  initiatorId: string,
  reason: string,
  evidence?: { url: string; name: string; type: string }[]
) {
  try {
    // First check if there's already a payment for this assignment
    const payment = await prisma.payment.findFirst({
      where: {
        assignmentId: assignmentId,
      },
    });

    if (!payment) {
      return {
        success: false,
        error: "No payment found for this assignment. A dispute cannot be created.",
      };
    }
    
    // Get assignment details first to determine the other party
    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId },
      select: { 
        title: true,
        posterId: true,
        doerId: true
      }
    });
    
    if (!assignment) {
      return {
        success: false,
        error: "Assignment not found.",
      };
    }
    
    // Create the dispute directly without a transaction
    const dispute = await prisma.dispute.create({
      data: {
        reason,
        evidence: evidence || [],
        status: "OPEN",
        assignment: {
          connect: { id: assignmentId },
        },
        payment: {
          connect: { id: payment.id },
        },
        initiator: {
          connect: { id: initiatorId },
        },
      },
      include: {
        assignment: true,
        payment: true,
        initiator: true,
      },
    });
    
    // Update assignment status to IN_DISPUTE
    await prisma.assignment.update({
      where: { id: assignmentId },
      data: { status: "IN_DISPUTE" }
    });
    
    // Update payment status to DISPUTED
    await prisma.payment.update({
      where: { id: payment.id },
      data: { status: "DISPUTED" }
    });
    
    // Determine the other party's ID 
    // (if initiator is poster, then notify doer, and vice versa)
    const otherPartyId = initiatorId === assignment.posterId 
      ? assignment.doerId 
      : assignment.posterId;
      
    // Send notification to the other party if they exist
    if (otherPartyId) {
      await prisma.message.create({
        data: {
          content: `A dispute has been opened for assignment "${assignment.title}". Please provide your response in the disputes section of your dashboard.`,
          senderId: initiatorId,
          receiverId: otherPartyId,
          assignmentId: assignmentId,
        }
      });
    }
    
    return {
      success: true,
      data: dispute,
    };
  } catch (error) {
    console.error("Error creating dispute:", error);
    return {
      success: false,
      error: "Failed to create dispute: " + (error instanceof Error ? error.message : String(error)),
    };
  }
}

export async function getAllDisputes(force: boolean = false) {
  try {
    console.log("Starting getAllDisputes function");
    
    // First, check if there are any disputes in the database at all
    const count = await prisma.dispute.count();
    console.log(`Total disputes in database: ${count}`);
    
    if (count === 0) {
      console.log("No disputes found in the database");
      return {
        success: true,
        data: [],
      };
    }
    
    // If there are disputes, fetch them with relations
    console.log("Fetching disputes with relations");
    const disputes = await prisma.dispute.findMany({
      include: {
        assignment: {
          include: {
            poster: true,
            doer: true,
          },
        },
        payment: true,
        initiator: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    console.log(`Fetched ${disputes.length} disputes`);
    
    // If force is true, return all disputes regardless of missing relations
    if (force) {
      console.log("Force flag is set, returning all disputes without filtering");
      return {
        success: true,
        data: disputes,
      };
    }
    
    // Check if any disputes have missing relations that might cause issues in the UI
    const validDisputes = disputes.filter(dispute => 
      dispute.assignment && 
      dispute.assignment.poster && 
      dispute.initiator
    );
    
    if (validDisputes.length !== disputes.length) {
      console.warn(`Found ${disputes.length - validDisputes.length} disputes with missing required relations`);
    }
    
    return {
      success: true,
      data: validDisputes,
    };
  } catch (error) {
    console.error("Error fetching disputes:", error);
    return {
      success: false,
      error: "Failed to fetch disputes: " + (error instanceof Error ? error.message : "Unknown error"),
    };
  }
}

export async function getDisputeDetails(disputeId: string) {
  try {
    const dispute = await prisma.dispute.findUnique({
      where: {
        id: disputeId,
      },
      include: {
        assignment: {
          include: {
            poster: true,
            doer: true,
            bids: {
              include: {
                user: true,
              },
            },
            submissions: {
              include: {
                user: true,
              },
            },
            messages: {
              include: {
                sender: true,
                receiver: true,
              },
              orderBy: {
                createdAt: "asc",
              },
            },
          },
        },
        payment: true,
        initiator: true,
        resolvedBy: true,
      },
    });

    if (!dispute) {
      return {
        success: false,
        error: "Dispute not found.",
      };
    }

    return {
      success: true,
      data: dispute,
    };
  } catch (error) {
    console.error("Error fetching dispute details:", error);
    return {
      success: false,
      error: "Failed to fetch dispute details.",
    };
  }
}

export async function resolveDispute(
  disputeId: string,
  adminId: string,
  resolution: string,
  status: DisputeStatus
) {
  try {
    // First get the dispute to get assignment info
    const dispute = await prisma.dispute.findUnique({
      where: { id: disputeId },
      include: {
        payment: true,
        assignment: true
      }
    });
    
    if (!dispute) {
      return {
        success: false,
        error: "Dispute not found"
      };
    }

    // 1. Update the dispute status
    const updatedDispute = await prisma.dispute.update({
      where: {
        id: disputeId,
      },
      data: {
        status: status,
        resolution: resolution,
        resolvedBy: {
          connect: { id: adminId },
        },
      },
      include: {
        payment: true,
        assignment: true,
      },
    });

    // 2. Update the payment status based on the dispute resolution
    let paymentStatus;
    let assignmentStatus;
    
    if (status === "RESOLVED_REFUND") {
      paymentStatus = "REFUNDED";
      assignmentStatus = "CANCELLED";
    } else if (status === "RESOLVED_RELEASE") {
      paymentStatus = "RELEASED";
      assignmentStatus = "COMPLETED";
    } else {
      // This shouldn't happen, but handle it just in case
      return {
        success: false,
        error: "Invalid resolution status"
      };
    }

    // Update payment status
    await prisma.payment.update({
      where: {
        id: updatedDispute.payment.id,
      },
      data: {
        status: paymentStatus,
      },
    });
    
    // Update assignment status
    await prisma.assignment.update({
      where: {
        id: updatedDispute.assignment.id,
      },
      data: {
        status: assignmentStatus,
      },
    });
    
    // 3. Create notifications for both parties
    // Get both poster and doer
    const assignment = await prisma.assignment.findUnique({
      where: { id: updatedDispute.assignment.id },
      select: { 
        posterId: true, 
        doerId: true,
        title: true
      }
    });
    
    if (assignment && assignment.posterId && assignment.doerId) {
      // Create notification message based on resolution
      const notificationMessage = 
        status === "RESOLVED_REFUND" 
          ? `Your dispute for "${assignment.title}" has been resolved. The payment has been refunded to the poster.`
          : `Your dispute for "${assignment.title}" has been resolved. The payment has been released to the doer.`;
      
      // For poster
      await prisma.message.create({
        data: {
          content: notificationMessage,
          senderId: adminId, // Admin is the sender
          receiverId: assignment.posterId,
          assignmentId: updatedDispute.assignment.id,
        }
      });
      
      // For doer
      await prisma.message.create({
        data: {
          content: notificationMessage,
          senderId: adminId, // Admin is the sender
          receiverId: assignment.doerId,
          assignmentId: updatedDispute.assignment.id,
        }
      });
    }

    return {
      success: true,
      data: updatedDispute,
    };
  } catch (error) {
    console.error("Error resolving dispute:", error);
    return {
      success: false,
      error: "Failed to resolve dispute: " + (error instanceof Error ? error.message : String(error)),
    };
  }
}

// This function is for debugging purposes only
export async function getDisputesDebug() {
  try {
    // Get basic dispute data without complex relations
    const basicDisputes = await prisma.dispute.findMany({
      select: {
        id: true,
        reason: true,
        status: true,
        createdAt: true,
        paymentId: true,
        assignmentId: true,
        initiatorId: true,
      },
    });
    
    // Check payments related to disputes
    const payments = await prisma.payment.findMany({
      where: {
        id: { in: basicDisputes.map(d => d.paymentId) }
      },
      select: {
        id: true,
        status: true,
        assignmentId: true,
        senderId: true,
        receiverId: true,
      }
    });
    
    // Check assignments related to disputes
    const assignments = await prisma.assignment.findMany({
      where: {
        id: { in: basicDisputes.map(d => d.assignmentId) }
      },
      select: {
        id: true,
        title: true,
        status: true,
        posterId: true,
        doerId: true,
      }
    });
    
    return {
      success: true,
      data: {
        disputes: basicDisputes,
        payments,
        assignments
      }
    };
  } catch (error) {
    console.error("Error in debug function:", error);
    return {
      success: false,
      error: "Debugging error: " + (error instanceof Error ? error.message : "Unknown error"),
    };
  }
}

/**
 * Checks if an assignment is currently in dispute
 * This can be used to restrict certain actions on disputed assignments
 */
export async function isAssignmentInDispute(assignmentId: string) {
  try {
    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId },
      select: { 
        status: true,
        disputes: {
          where: { 
            status: "OPEN" 
          },
          select: { id: true }
        }
      }
    });
    
    if (!assignment) {
      return {
        success: false,
        error: "Assignment not found"
      };
    }
    
    // Check if the assignment is in dispute status or has open disputes
    const isInDispute = 
      assignment.status === "IN_DISPUTE" || 
      (assignment.disputes && assignment.disputes.length > 0);
    
    return {
      success: true,
      isInDispute
    };
  } catch (error) {
    console.error("Error checking dispute status:", error);
    return {
      success: false,
      error: "Failed to check if assignment is in dispute: " + (error instanceof Error ? error.message : String(error))
    };
  }
}

/**
 * Submit a response to a dispute from the other party
 */
export async function submitDisputeResponse(
  disputeId: string,
  userId: string,
  response: string,
  responseEvidence?: { url: string; name: string; type: string }[]
) {
  try {
    // 1. Find the dispute
    const dispute = await prisma.dispute.findUnique({
      where: { id: disputeId },
      include: {
        assignment: true
      }
    });
    
    if (!dispute) {
      return {
        success: false,
        error: "Dispute not found"
      };
    }
    
    // 2. Validate that the user is a party to this dispute (but not the initiator)
    const isPoster = dispute.assignment.posterId === userId;
    const isDoer = dispute.assignment.doerId === userId;
    const isInitiator = dispute.initiatorId === userId;
    
    if (!isPoster && !isDoer) {
      return {
        success: false,
        error: "You are not a party to this dispute"
      };
    }
    
    if (isInitiator) {
      return {
        success: false,
        error: "As the dispute initiator, you cannot respond to your own dispute"
      };
    }
    
    // 3. Use raw SQL to update the dispute with the response
    await prisma.$executeRaw`
      UPDATE "Dispute"
      SET "response" = ${response}, 
          "responseEvidence" = ${JSON.stringify(responseEvidence || [])}::jsonb, 
          "hasResponse" = true
      WHERE "id" = ${disputeId}
    `;
    
    // Get the updated dispute
    const updatedDispute = await prisma.dispute.findUnique({
      where: { id: disputeId }
    });
    
    // 4. Notify admin that a response has been submitted
    const admins = await prisma.user.findMany({
      where: { role: "ADMIN" },
      select: { id: true }
    });
    
    // Send notification to all admins
    for (const admin of admins) {
      await prisma.message.create({
        data: {
          content: `A response has been submitted for dispute #${disputeId}. Please review and make a decision.`,
          senderId: userId,
          receiverId: admin.id,
          assignmentId: dispute.assignmentId,
        }
      });
    }
    
    // 5. Notify the initiator that a response has been submitted
    await prisma.message.create({
      data: {
        content: `The other party has responded to your dispute for assignment "${dispute.assignment.title}".`,
        senderId: userId,
        receiverId: dispute.initiatorId,
        assignmentId: dispute.assignmentId,
      }
    });
    
    return {
      success: true,
      data: updatedDispute
    };
  } catch (error) {
    console.error("Error submitting dispute response:", error);
    return {
      success: false,
      error: "Failed to submit dispute response: " + (error instanceof Error ? error.message : String(error))
    };
  }
}

/**
 * Get all disputes where the user is a party (either initiator or respondent)
 * This can be used in both poster and doer dashboards
 */
export async function getUserDisputes(userId: string) {
  try {
    // Find all assignments where user is either poster or doer
    const assignments = await prisma.assignment.findMany({
      where: {
        OR: [
          { posterId: userId },
          { doerId: userId }
        ],
        disputes: {
          some: {} // Has at least one dispute
        }
      },
      select: {
        id: true
      }
    });
    
    const assignmentIds = assignments.map(a => a.id);
    
    if (assignmentIds.length === 0) {
      return {
        success: true,
        data: []
      };
    }
    
    // Get all disputes for these assignments
    const disputes = await prisma.dispute.findMany({
      where: {
        assignmentId: {
          in: assignmentIds
        }
      },
      include: {
        assignment: {
          include: {
            poster: true,
            doer: true
          }
        },
        payment: true,
        initiator: true,
        resolvedBy: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // For each dispute, determine if the user needs to respond
    const disputesWithResponseInfo = disputes.map(dispute => {
      const isInitiator = dispute.initiatorId === userId;
      // Cast dispute to any type to avoid TypeScript errors when adding custom fields
      const disputeInfo = dispute as any;
      const needsResponse = !isInitiator && 
                           disputeInfo.status === "OPEN" && 
                           !disputeInfo.hasResponse;
      
      return {
        ...dispute,
        isInitiator,
        needsResponse
      };
    });
    
    return {
      success: true,
      data: disputesWithResponseInfo
    };
  } catch (error) {
    console.error("Error fetching user disputes:", error);
    return {
      success: false,
      error: "Failed to fetch disputes: " + (error instanceof Error ? error.message : "Unknown error")
    };
  }
} 