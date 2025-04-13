'use server'

import prisma from "@/lib/db";
import { pusherServer } from "@/lib/pusher";
import { auth } from "@clerk/nextjs/server";

export async function sendMessage(
  content: string,
  assignmentId: string,
  receiverId: string,
  fileUrl?: string,
  fileName?: string,
  fileType?: string
) {
  try {
    // Get the current user's ID from auth
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("Unauthorized");
    }
    
    if (!assignmentId) {
      throw new Error("Assignment ID is required");
    }

    if (!content.trim() && !fileUrl) {
      throw new Error("Message cannot be empty");
    }

    console.log("Saving message:", { content, assignmentId, receiverId, senderId: userId });

    // Check if assignment exists
    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId }
    });

    if (!assignment) {
      throw new Error(`Assignment with ID ${assignmentId} not found`);
    }

    // Create message in database
    const message = await prisma.message.create({
      data: {
        content,
        assignmentId,
        receiverId,
        senderId: userId,
        fileUrls: fileUrl, // Store the file URL or JSON array of file objects
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    console.log("Message saved successfully:", message);

    // Trigger Pusher event for real-time updates
    await pusherServer.trigger(
      `assignment-${assignmentId}`,
      'new-message',
      message
    );

    return {
      success: true,
      data: message,
      message: `Message sent to ${message.receiver.name || 'recipient'}`
    };
  } catch (error) {
    console.error("Error sending message:", error);
    let errorMessage = "Failed to send message";
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return {
      success: false,
      error: errorMessage
    };
  }
} 