import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import prisma from '@/lib/db';
import { AssignmentStatus } from "@prisma/client";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-03-31.basil',
});

// Helper to read the request body as text
// async function buffer(readable: Readable) {
//   const chunks = [];
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
//   }
//   return Buffer.concat(chunks);
// }

export async function POST(req: Request) {
  const body = await req.text();
  // Get headers and signature in a Next.js App Router compatible way
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  let event;

  try {
    if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error("Missing signature or webhook secret");
    }
    
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  try {
    console.log(`Received webhook event: ${event.type}`);
    
    // Handle the event based on its type
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object);
        break;
        
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object);
        break;
        
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object);
        break;
        
      case 'account.updated':
        await handleAccountUpdated(event.data.object);
        break;
        
      // Add other event types as needed
        
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: any) {
  const { taskId, bidId } = paymentIntent.metadata || {};
  
  if (!taskId || !bidId) {
    console.log("Missing metadata in payment intent");
    return;
  }
  
  console.log(`Payment intent succeeded: ${paymentIntent.id} for task ${taskId}`);
  
  // Update the assignment status and save the paymentIntentId
  await prisma.assignment.updateMany({
    where: {
      id: taskId,
      status: {
        not: AssignmentStatus.COMPLETED,
      },
    } as any,
    data: {
      status: AssignmentStatus.ASSIGNED,
      stripePaymentIntentId: paymentIntent.id,
    },
  });
  
  // Update the payment record as COMPLETED
  await prisma.payment.updateMany({
    where: {
      assignmentId: taskId,
      status: 'PENDING',
    },
    data: {
      status: 'COMPLETED',
      stripePaymentId: paymentIntent.id,
    },
  });
  
  console.log(`Payment succeeded for task ${taskId}, updated with payment intent ID ${paymentIntent.id}`);
}

// Handle checkout session completed event
async function handleCheckoutSessionCompleted(session: any) {
  const { taskId, bidId, doerId } = session.metadata || {};
  
  if (!taskId || !bidId) {
    console.log("Missing metadata in checkout session");
    return;
  }
  
  console.log(`Checkout session completed: ${session.id} for task ${taskId}`);
  
  try {
    // Retrieve the payment intent associated with this session
    const paymentIntent = await stripe.paymentIntents.retrieve(
      session.payment_intent
    );
    
    console.log(`Associated payment intent: ${paymentIntent.id}`);
    
    // Update the task with the payment intent ID
    await prisma.assignment.update({
      where: {
        id: taskId,
      },
      data: {
        stripePaymentIntentId: paymentIntent.id,
        status: AssignmentStatus.ASSIGNED,
        doerId: doerId,
        acceptedBidId: bidId,
      },
    });
    
    // Update the payment record
    await prisma.payment.updateMany({
      where: {
        assignmentId: taskId,
        status: 'PENDING',
      },
      data: {
        status: 'COMPLETED',
        stripePaymentId: paymentIntent.id,
      },
    });
    
    // Mark the bid as accepted
    await prisma.bid.update({
      where: {
        id: bidId,
      },
      data: {
        status: "ACCEPTED",
      },
    });
    
    // Decline other bids
    await prisma.bid.updateMany({
      where: {
        assignmentId: taskId,
        id: {
          not: bidId,
        },
      },
      data: {
        status: "DECLINED",
      },
    });
    
    console.log(`Task and payment records updated for task ${taskId}`);
  } catch (error) {
    console.error(`Error processing checkout session for task ${taskId}:`, error);
  }
}

async function handlePaymentIntentFailed(paymentIntent: any) {
  const { taskId, bidId } = paymentIntent.metadata || {};
  
  if (!taskId || !bidId) {
    console.log("Missing metadata in payment intent");
    return;
  }
  
  // Revert the assignment status
  await prisma.assignment.updateMany({
    where: {
      id: taskId,
      stripePaymentIntentId: paymentIntent.id,
    } as any,
    data: {
      status: AssignmentStatus.OPEN,
      doerId: null,
      acceptedBidId: null,
      stripePaymentIntentId: null,
    } as any,
  });
  
  // Revert the bid status
  await prisma.bid.update({
    where: {
      id: bidId,
    },
    data: {
      status: "PENDING",
    },
  });
  
  console.log(`Payment failed for task ${taskId}`);
}

async function handleAccountUpdated(account: any) {
  // Update user record when their Stripe account is updated
  const user = await prisma.user.findFirst({
    where: {
      stripeConnectAccountId: account.id,
    } as any,
  });
  
  if (!user) {
    console.log(`No user found with Stripe account ID ${account.id}`);
    return;
  }
  
  // Update verification status based on account details
  // const verificationStatus = account.charges_enabled ? "VERIFIED" : "PENDING";
  
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      stripeAccountVerified: account.charges_enabled,
    } as any,
  });
  
  console.log(`Updated user ${user.id} Stripe account status`);
}

// Config for the API route
export const config = {
  api: {
    bodyParser: false,
  },
}; 