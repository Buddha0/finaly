'use server'

import prisma from "@/lib/db";

export async function getMessages(assignmentId: string) {
  try {
    if (!assignmentId) {
      console.error("No assignmentId provided");
      return {
        success: false,
        error: "Assignment ID is required"
      };
    }

    console.log("Fetching messages for assignment:", assignmentId);

    // Check if assignment exists
    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId }
    });

    if (!assignment) {
      console.error(`Assignment with ID ${assignmentId} not found`);
      return {
        success: false,
        error: "Assignment not found"
      };
    }

    const messages = await prisma.message.findMany({
      where: {
        assignmentId,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true,
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    console.log(`Found ${messages.length} messages for assignment ${assignmentId}`);

    return {
      success: true,
      data: messages
    };
  } catch (error) {
    console.error("Error fetching messages:", error);
    return {
      success: false,
      error: "Failed to fetch messages"
    };
  }
} 