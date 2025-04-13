"use server"

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { pusherServer } from "@/lib/pusher";

/**
 * Get all messages for a specific assignment
 */
export async function getMessages(assignmentId: string) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return { 
        success: false, 
        error: "Unauthorized" 
      };
    }

    // Verify the user has access to this assignment
    const assignment = await prisma.assignment.findUnique({
      where: {
        id: assignmentId,
        OR: [
          { posterId: userId },
          { doerId: userId }
        ]
      }
    });

    if (!assignment) {
      return { 
        success: false, 
        error: "Assignment not found or access denied" 
      };
    }

    // Get all messages for this assignment
    const messages = await prisma.message.findMany({
      where: {
        assignmentId: assignmentId
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    // Mark messages as read if they were sent to the current user
    await prisma.message.updateMany({
      where: {
        assignmentId: assignmentId,
        receiverId: userId,
        isRead: false
      },
      data: {
        isRead: true
      }
    });

    return { 
      success: true, 
      data: messages 
    };
  } catch (error) {
    console.error("Failed to get messages:", error);
    return { 
      success: false, 
      error: "Failed to load messages" 
    };
  }
}

/**
 * Send a new message
 */
export async function sendMessage(
  content: string,
  assignmentId: string,
  receiverId: string,
  fileUrl?: string,
  fileName?: string,
  fileType?: string
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return { 
        success: false, 
        error: "Unauthorized" 
      };
    }

    // Verify the user has access to this assignment
    const assignment = await prisma.assignment.findUnique({
      where: {
        id: assignmentId,
        OR: [
          { posterId: userId },
          { doerId: userId }
        ]
      },
      select: {
        posterId: true,
        doerId: true,
        status: true
      }
    });

    if (!assignment) {
      return { 
        success: false, 
        error: "Assignment not found or access denied" 
      };
    }

    // Check if the assignment has a doer assigned (bid accepted)
    if (!assignment.doerId) {
      return {
        success: false,
        error: "Chat is only available after a bid has been accepted"
      };
    }

    // Ensure receiver is part of this assignment
    if (receiverId !== assignment.posterId && receiverId !== assignment.doerId) {
      return { 
        success: false, 
        error: "Invalid recipient" 
      };
    }

    // Debugging fileUrl
    console.log("fileUrl parameter:", fileUrl);
    
    // Prepare file data if provided
    let fileData = {};
    
    if (fileUrl) {
      // Check if it's already valid JSON
      try {
        // If it's already a JSON string, keep it as is
        JSON.parse(fileUrl);
        fileData = { fileUrls: fileUrl };
        console.log("Using provided fileUrl JSON directly");
      } catch (e) {
        // Not valid JSON, create a new structure
        console.log("Creating new JSON for fileUrl");
        fileData = {
          fileUrls: JSON.stringify([{ 
            url: fileUrl,
            name: fileName || fileUrl.split('/').pop() || "Attachment",
            type: fileType || "application/octet-stream"
          }])
        };
      }
    }

    // Create the message
    const message = await prisma.message.create({
      data: {
        content,
        assignmentId,
        senderId: userId,
        receiverId,
        ...fileData
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    });

    console.log("Created message with fileUrls:", message.fileUrls);

    // Trigger Pusher event
    await pusherServer.trigger(
      `assignment-${assignmentId}`,
      'new-message',
      message
    );

    // Revalidate paths to update UI
    revalidatePath(`/poster/${assignmentId}`);
    revalidatePath(`/doer/tasks/${assignmentId}`);
    revalidatePath(`/poster/${assignmentId}/chat`);
    revalidatePath(`/doer/tasks/${assignmentId}/chat`);

    return { 
      success: true, 
      data: message 
    };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { 
      success: false, 
      error: "Failed to send message" 
    };
  }
}

/**
 * Get unread message count for current user
 */
export async function getUnreadMessageCount() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return { 
        success: false, 
        error: "Unauthorized",
        count: 0
      };
    }

    // Count all unread messages for the user
    const count = await prisma.message.count({
      where: {
        receiverId: userId,
        isRead: false
      }
    });

    return { 
      success: true, 
      count
    };
  } catch (error) {
    console.error("Failed to get unread message count:", error);
    return { 
      success: false, 
      error: "Failed to get unread message count",
      count: 0
    };
  }
}

/**
 * Get unread message count for a specific assignment
 */
export async function getAssignmentUnreadCount(assignmentId: string) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return { 
        success: false, 
        error: "Unauthorized",
        count: 0
      };
    }

    // Count unread messages for this assignment
    const count = await prisma.message.count({
      where: {
        assignmentId,
        receiverId: userId,
        isRead: false
      }
    });

    return { 
      success: true, 
      count
    };
  } catch (error) {
    console.error("Failed to get unread count:", error);
    return { 
      success: false, 
      error: "Failed to get unread count",
      count: 0
    };
  }
} 