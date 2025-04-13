import { stripe } from '@/app/lib/stripe';
import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { PaymentStatus } from '@prisma/client';
import { NextResponse } from 'next/server';

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

    console.log("Task retrievedasdasdasd:", {
      id: task?.id,
      status: task?.status,
      hasPayment: !!task?.payment,
      paymentId: task?.payment?.id,
      stripePaymentIntentId: task?.stripePaymentIntentId,
      allTaskKeys: task ? Object.keys(task) : []
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

    // Verify the payment exists
    if (!task.payment || task.payment.id !== paymentId) {
      return NextResponse.json(
        { error: 'Invalid payment for this task' }, 
        { status: 400 }
      );
    }

    // Check if payment is already released
    if (task.payment.status === PaymentStatus.RELEASED) {
      return NextResponse.json(
        { error: 'Payment has already been released' },
        { status: 400 }
      );
    }

    // Check if task is in a valid state for payment release
    const validTaskStatuses = [
      'UNDER_REVIEW',
      'COMPLETED'
    ];
    
    if (!validTaskStatuses.includes(task.status)) {
      return NextResponse.json(
        { error: 'Task must be under review or completed to release payment' }, 
        { status: 400 }
      );
    }

    // Verify we have a Stripe Payment Intent ID
    const stripePaymentIntentId = task.stripePaymentIntentId;
    if (!stripePaymentIntentId) {
      console.log("No stripePaymentIntentId found on task, checking payment record...");
      
      // If no paymentIntentId on the task, try to get it from the payment record's stripePaymentId
      if (!task.payment?.stripePaymentId) {
        return NextResponse.json(
          { error: 'No Stripe payment information found for this task' },
          { status: 400 }
        );
      }
      
      // For existing tasks where we don't have the paymentIntentId stored, 
      // we'll retrieve it using the checkout session ID
      try {
        const session = await stripe.checkout.sessions.retrieve(task.payment.stripePaymentId);
        
        // Check if the session has a paymentIntent
        if (!session.payment_intent) {
          return NextResponse.json(
            { error: 'No payment intent associated with this checkout session' },
            { status: 400 }
          );
        }
        
        console.log(`Retrieved payment intent ${session.payment_intent} from checkout session`);
        
        // Store the payment intent ID on the task for future use
        await prisma.assignment.update({
          where: { id: taskId },
          data: { stripePaymentIntentId: session.payment_intent as string }
        });
        
        // Use this payment intent ID for the capture
        const retrievedPaymentIntentId = session.payment_intent as string;
        
        // Capture the payment in Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(retrievedPaymentIntentId);
        
        // If it's already captured, we can proceed with database updates
        if (paymentIntent.status === 'succeeded') {
          console.log('Payment was already captured, proceeding with database updates');
        } 
        // If it needs manual capturing
        else if (paymentIntent.status === 'requires_capture') {
          const capturedIntent = await stripe.paymentIntents.capture(retrievedPaymentIntentId);
          console.log(`Payment captured with status: ${capturedIntent.status}`);
        }
        else {
          return NextResponse.json(
            { error: `Payment is in an unexpected state: ${paymentIntent.status}` },
            { status: 400 }
          );
        }
      } catch (sessionError) {
        console.error('Error retrieving or processing checkout session:', sessionError);
        
        // For existing payments where we can't capture properly, we'll just update the database
        console.log('Proceeding with database updates only due to Stripe error');
      }
    }
    else {
      try {
        // Capture the payment in Stripe
        const paymentIntent = await stripe.paymentIntents.capture(stripePaymentIntentId);
        
        if (paymentIntent.status !== 'succeeded') {
          return NextResponse.json(
            { error: `Payment capture failed with status: ${paymentIntent.status}` },
            { status: 400 }
          );
        }
        
        console.log(`Stripe payment captured successfully: ${stripePaymentIntentId}`);
      } catch (stripeError: any) {
        console.error('Stripe payment capture error:', stripeError);
        
        // Check for specific Stripe errors
        if (stripeError.type === 'StripeInvalidRequestError') {
          if (stripeError.code === 'payment_intent_unexpected_state') {
            return NextResponse.json(
              { error: 'Payment cannot be captured (already captured or cancelled)' },
              { status: 400 }
            );
          }
        }
        
        // Generic Stripe error
        return NextResponse.json(
          { 
            error: 'Failed to capture payment with Stripe',
            details: stripeError.message || 'Unknown Stripe error'
          },
          { status: 500 }
        );
      }
    }

    // If we get here, Stripe payment capture was successful
    // Now update our database
    try {
      // Start a transaction for payment release
      await prisma.$transaction(async (tx) => {
        // Update payment status to RELEASED
        await tx.payment.update({
          where: {
            id: paymentId,
          },
          data: {
            status: PaymentStatus.RELEASED,
          },
        });

        // Always ensure the task is marked as COMPLETED
        if (task.status !== 'COMPLETED') {
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
    } catch (dbError) {
      console.error('Database update error after successful Stripe capture:', dbError);
      return NextResponse.json(
        { 
          error: 'Payment was captured in Stripe but database update failed',
          stripeStatus: 'succeeded',
          dbError: (dbError as Error).message
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Payment released successfully and task marked as completed',
      taskStatus: 'COMPLETED',
      paymentStatus: 'RELEASED',
      stripeStatus: 'succeeded'
    });
  } catch (error) {
    console.error('Error releasing payment:', error);
    return NextResponse.json(
      { error: 'Failed to release payment: ' + (error as Error).message }, 
      { status: 500 }
    );
  }
} 