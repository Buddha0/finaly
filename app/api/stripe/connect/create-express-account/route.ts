import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/app/lib/stripe";
import prisma from "@/lib/db";

export async function POST() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get user details from database - using type assertion for Clerk ID
    const user = await prisma.user.findFirst({
      where: { 
        clerkId: userId 
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Type assertion for user to access Stripe fields
    const userWithStripe = user as any;

    // Check if user already has a Stripe account
    if (userWithStripe.stripeConnectAccountId) {
      // If they have an account, get account link for onboarding
      const accountLink = await stripe.accountLinks.create({
        account: userWithStripe.stripeConnectAccountId,
        refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/doer/verification/stripe?error=true`,
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/doer/verification/stripe?success=true`,
        type: 'account_onboarding',
      });

      return NextResponse.json({ url: accountLink.url });
    }

    // Create a Stripe Connect Express account
    const account = await stripe.accounts.create({
      type: 'express',
      country: 'US', // Default country
      email: user.email || '',
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_type: 'individual',
      metadata: {
        userId: user.id,
      },
    });

    // Update user record with Stripe Connect account ID - using type assertion for update
    await prisma.user.update({
      where: { id: user.id },
      data: { 
        stripeConnectAccountId: account.id 
      } as any,
    });

    // Create an account link for onboarding
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/doer/verification/stripe?error=true`,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/doer/verification/stripe?success=true`,
      type: 'account_onboarding',
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (error) {
    console.error("Error creating Stripe Connect account:", error);
    return NextResponse.json(
      { error: "Failed to create Stripe Connect account" },
      { status: 500 }
    );
  }
} 