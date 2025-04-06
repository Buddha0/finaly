import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    const { taskId, paymentId } = await req.json();

    if (!taskId || !paymentId) {
      return NextResponse.json(
        { error: 'Task ID and Payment ID are required' }, 
        { status: 400 }
      );
    }

    // Get the task and payment details
    const task = await prisma.assignment.findUnique({
      where: { id: taskId },
      include: {
        payment: true,
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' }, 
        { status: 404 }
      );
    }

    // Verify the user is the task poster
    if (task.posterId !== userId) {
      return NextResponse.json(
        { error: 'Only the task poster can release the payment' }, 
        { status: 403 }
      );
    }

    // Verify the payment exists and is in the correct state
    if (!task.payment || task.payment.id !== paymentId) {
      return NextResponse.json(
        { error: 'Invalid payment for this task' }, 
        { status: 400 }
      );
    }

    if (task.payment.status !== 'COMPLETED') {
      return NextResponse.json(
        { error: 'Payment cannot be released (not in COMPLETED state)' }, 
        { status: 400 }
      );
    }

    // Check if task is in a state where payment can be released
    if (task.status !== 'COMPLETED' && task.status !== 'UNDER_REVIEW') {
      return NextResponse.json(
        { error: 'Task must be completed before releasing payment' }, 
        { status: 400 }
      );
    }

    // Start a transaction for payment release
    await prisma.$transaction(async (tx) => {
      // Update payment status to RELEASED
      await tx.payment.update({
        where: {
          id: paymentId,
        },
        data: {
          status: 'RELEASED',
        },
      });

      // If the task is under review, update it to completed
      if (task.status === 'UNDER_REVIEW') {
        await tx.assignment.update({
          where: {
            id: taskId,
          },
          data: {
            status: 'COMPLETED',
          },
        });
      }

      // Update doer's account balance
      if (task.doerId && task.payment) {
        await tx.user.update({
          where: {
            id: task.doerId,
          },
          data: {
            accountBalance: {
              increment: task.payment.amount,
            },
          },
        });
      }
    });

    return NextResponse.json({ 
      success: true,
      message: 'Payment released successfully'
    });
  } catch (error) {
    console.error('Error releasing payment:', error);
    return NextResponse.json(
      { error: 'Failed to release payment' }, 
      { status: 500 }
    );
  }
} 