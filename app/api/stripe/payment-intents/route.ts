import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/app/lib/stripe";
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
    
    const { bidId, taskId, amount } = await req.json();
    
    if (!bidId || !taskId || !amount) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Verify the poster owns the task
    const task = await prisma.assignment.findUnique({
      where: {
        id: taskId,
        posterId: userId,
      },
      include: {
        doer: true,
      }
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task not found or unauthorized" },
        { status: 404 }
      );
    }

    // Get the bid to find the doer
    const bid = await prisma.bid.findUnique({
      where: {
        id: bidId,
      },
      include: {
        user: true,
      }
    });

    if (!bid) {
      return NextResponse.json(
        { error: "Bid not found" },
        { status: 404 }
      );
    }

    // Type assertion for the user to access Stripe fields
    const bidUser = bid.user as any;

    // Verify the doer has a Stripe account
    if (!bidUser.stripeConnectAccountId) {
      return NextResponse.json(
        { error: "Doer has not completed Stripe onboarding", requiresOnboarding: true, doerId: bid.userId },
        { status: 400 }
      );
    }

    // Verify the doer's account is properly set up
    const account = await stripe.accounts.retrieve(bidUser.stripeConnectAccountId);
    
    if (!account.charges_enabled) {
      return NextResponse.json(
        { error: "Doer's Stripe account is not fully set up", requiresOnboarding: true, doerId: bid.userId },
        { status: 400 }
      );
    }

    // Calculate application fee (platform fee) - for example, 10%
    const platformFeePercent = 0.10;
    const amountInCents = Math.round(amount * 100);
    const applicationFeeAmount = Math.round(amountInCents * platformFeePercent);

    // Create the payment intent with application fee and transfer data
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
      application_fee_amount: applicationFeeAmount,
      transfer_data: {
        destination: bidUser.stripeConnectAccountId,
      },
      metadata: {
        taskId,
        bidId,
        doerId: bid.userId,
        posterId: userId,
      },
      capture_method: 'manual', // This enables the escrow functionality
    });

    // Update the task status to ASSIGNED and set the doer
    await prisma.assignment.update({
      where: {
        id: taskId,
      },
      data: {
        status: AssignmentStatus.ASSIGNED,
        doerId: bid.userId,
        acceptedBidId: bidId,
        stripePaymentIntentId: paymentIntent.id,
      } as any,
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

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
} 