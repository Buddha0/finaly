"use server"

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await auth();
    const userId = authResult.userId;
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { messageId } = body;
    
    if (!messageId) {
      return NextResponse.json(
        { success: false, error: "Message ID is required" },
        { status: 400 }
      );
    }

    // Verify the message belongs to the user
    const message = await prisma.message.findUnique({
      where: {
        id: messageId,
        receiverId: userId,
      },
    });

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message not found or does not belong to you" },
        { status: 404 }
      );
    }

    // Mark the message as read
    await prisma.message.update({
      where: {
        id: messageId,
      },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error marking message as read:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 