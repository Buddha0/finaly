import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/db';
import { stripe } from '@/app/lib/stripe';

export async function POST(req: Request) {
  try {
    // Ensure user is logged in and has appropriate permissions
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    // Get request body
    const { taskId, sessionId } = await req.json();
    if (!taskId) {
      return NextResponse.json(
        { error: 'Task ID is required' }, 
        { status: 400 }
      );
    }

    // Get the task and check if the user is the poster
    const task = await prisma.assignment.findUnique({
      where: { id: taskId },
      include: {
        payment: true,
        bids: {
          where: { status: 'accepted' },
          take: 1,
        },
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' }, 
        { status: 404 }
      );
    }

    if (task.posterId !== userId) {
      return NextResponse.json(
        { error: 'Only the poster can verify payments' }, 
        { status: 403 }
      );
    }

    // If sessionId is provided, verify that specific payment
    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status !== 'paid') {
        return NextResponse.json({
          success: false,
          message: 'Payment has not been completed',
          status: session.payment_status,
        });
      }
    }

    // Check if there's a payment and if the task status is still OPEN
    if (task.payment && task.status === 'OPEN') {
      // If there's a payment but task is still open, we need to update it
      console.log('Found task with payment but status is still OPEN:', { 
        taskId, 
        paymentStatus: task.payment.status 
      });

      // Check for any accepted bids
      let acceptedBid = task.bids[0] || await prisma.bid.findFirst({
        where: {
          assignmentId: taskId,
          status: 'accepted',
        }
      });

      if (!acceptedBid) {
        // If there's no accepted bid, look for a bid with the doer ID matching the task payment recipient
        const possibleBid = await prisma.bid.findFirst({
          where: {
            assignmentId: taskId,
            userId: task.payment.receiverId,
          }
        });

        if (possibleBid) {
          // Update this bid to be accepted
          await prisma.bid.update({
            where: { id: possibleBid.id },
            data: { status: 'accepted' }
          });
          
          // Use this bid as the accepted bid
          acceptedBid = possibleBid;
        } else {
          return NextResponse.json({
            success: false,
            message: 'No accepted bid found for this task',
          });
        }
      }

      try {
        // Update assignment status to ASSIGNED and set the doer
        const updatedTask = await prisma.assignment.update({
          where: { id: taskId },
          data: {
            status: 'ASSIGNED',
            doerId: acceptedBid.userId,
          },
        });

        return NextResponse.json({
          success: true,
          message: 'Task status fixed successfully',
          task: updatedTask,
        });
      } catch (error) {
        console.error('Error updating task status:', error);
        return NextResponse.json(
          { error: 'Failed to update task status' }, 
          { status: 500 }
        );
      }
    }

    // If everything looks correct
    return NextResponse.json({
      success: true,
      message: 'Task status is correct',
      taskStatus: task.status,
      paymentStatus: task.payment?.status || 'No payment found',
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Payment verification failed' }, 
      { status: 500 }
    );
  }
} 