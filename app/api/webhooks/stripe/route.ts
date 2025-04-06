import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import prisma from '@/lib/db';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-03-31.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    // Use type assertion to resolve TypeScript error
    const headerList = headers() as any;
    const signature = headerList.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Stripe signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    // Handle specific events
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Log the entire session for debugging
        console.log('Stripe session completed:', JSON.stringify(session, null, 2));
        console.log('Session metadata:', session.metadata);
        
        // Extract metadata
        const { taskId, bidId, doerId } = session.metadata || {};
        
        if (!taskId || !bidId || !doerId) {
          console.error('Missing metadata in checkout session:', session.id);
          console.error('Available metadata:', JSON.stringify(session.metadata, null, 2));
          return NextResponse.json(
            { error: 'Missing metadata in checkout session' },
            { status: 400 }
          );
        }

        console.log(`Processing payment for task ${taskId}, bid ${bidId}, doer ${doerId}`);

        try {
          // Start a transaction to update payment and assignment status
          await prisma.$transaction(async (tx) => {
            console.log('Starting database transaction');
            
            // Update payment status
            const updatedPayment = await tx.payment.update({
              where: {
                assignmentId: taskId,
              },
              data: {
                status: 'COMPLETED',
                stripePaymentId: session.payment_intent as string,
              },
            });
            console.log('Updated payment:', updatedPayment);

            // Update bid status to accepted
            const updatedBid = await tx.bid.update({
              where: {
                id: bidId,
              },
              data: {
                status: 'accepted',
              },
            });
            console.log('Updated bid:', updatedBid);

            // Update all other bids for this task to rejected
            const rejectedBids = await tx.bid.updateMany({
              where: {
                assignmentId: taskId,
                id: {
                  not: bidId,
                },
              },
              data: {
                status: 'rejected',
              },
            });
            console.log('Rejected other bids:', rejectedBids);

            // Update assignment status to ASSIGNED and set the doer
            const updatedAssignment = await tx.assignment.update({
              where: {
                id: taskId,
              },
              data: {
                status: 'ASSIGNED',
                doerId: doerId,
              },
            });
            console.log('Updated assignment:', updatedAssignment);
            
            // Double-check that the assignment status was updated correctly
            const verifiedAssignment = await tx.assignment.findUnique({
              where: { id: taskId },
            });
            
            if (verifiedAssignment?.status !== 'ASSIGNED') {
              console.error('Failed to update task status to ASSIGNED, current status:', 
                           verifiedAssignment?.status);
              
              // Try one more time with a direct update outside of the transaction
              await prisma.assignment.update({
                where: { id: taskId },
                data: {
                  status: 'ASSIGNED',
                  doerId: doerId,
                },
              });
            }
            
            console.log('Transaction completed successfully');
          });
        } catch (error) {
          console.error('Error in database transaction:', error);
          return NextResponse.json(
            { error: 'Database update failed' },
            { status: 500 }
          );
        }

        console.log(`Payment completed for task ${taskId}, bid ${bidId}`);
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        const paymentIntentId = charge.payment_intent as string;

        // Find the payment record using the payment intent ID
        const payment = await prisma.payment.findFirst({
          where: {
            stripePaymentId: paymentIntentId,
          },
        });

        if (payment) {
          // Update payment status to REFUNDED
          await prisma.payment.update({
            where: {
              id: payment.id,
            },
            data: {
              status: 'REFUNDED',
              stripeRefundId: charge.refunds?.data?.[0]?.id,
            },
          });

          console.log(`Payment refunded for payment ID ${payment.id}`);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing Stripe webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
} 