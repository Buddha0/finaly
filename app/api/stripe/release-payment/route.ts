import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/db";
import { AssignmentStatus } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { taskId } = await req.json();
    
    if (!taskId) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    // Verify the poster owns the task
    const task = await prisma.assignment.findUnique({
      where: {
        id: taskId,
        posterId: userId,
        status: AssignmentStatus.UNDER_REVIEW,
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task not found, unauthorized, or not in the correct status" },
        { status: 404 }
      );
    }

    // Type assertion to access Stripe fields
    const taskWithStripe = task as any;
    
    if (!taskWithStripe.stripePaymentIntentId) {
      return NextResponse.json(
        { error: "No payment found for this task" },
        { status: 400 }
      );
    }

    // Capture the payment (release from escrow)
    await stripe.paymentIntents.capture(taskWithStripe.stripePaymentIntentId);

    // Update task status to COMPLETED
    await prisma.assignment.update({
      where: {
        id: taskId,
      },
      data: {
        status: AssignmentStatus.COMPLETED,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment released successfully",
    });
  } catch (error) {
    console.error("Error releasing payment:", error);
    return NextResponse.json(
      { error: "Failed to release payment" },
      { status: 500 }
    );
  }
} 