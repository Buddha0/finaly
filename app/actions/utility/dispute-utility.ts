import prisma from "@/lib/db";
import { DisputeStatus } from "@prisma/client";

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

    // Create the dispute
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

    return {
      success: true,
      data: dispute,
    };
  } catch (error) {
    console.error("Error creating dispute:", error);
    return {
      success: false,
      error: "Failed to create dispute.",
    };
  }
}

export async function getAllDisputes() {
  try {
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

    return {
      success: true,
      data: disputes,
    };
  } catch (error) {
    console.error("Error fetching disputes:", error);
    return {
      success: false,
      error: "Failed to fetch disputes.",
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
    // Update the dispute status
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
      },
    });

    // Update the payment status based on the dispute resolution
    let paymentStatus;
    if (status === "RESOLVED_REFUND") {
      paymentStatus = "REFUNDED";
    } else if (status === "RESOLVED_RELEASE") {
      paymentStatus = "RELEASED";
    }

    if (paymentStatus) {
      await prisma.payment.update({
        where: {
          id: updatedDispute.payment.id,
        },
        data: {
          status: paymentStatus,
        },
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
      error: "Failed to resolve dispute.",
    };
  }
} 