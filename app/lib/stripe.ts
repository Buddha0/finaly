import Stripe from 'stripe';

// Initialize Stripe with the secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-03-31.basil',
});

// Create a Stripe checkout session for task payment
export async function createCheckoutSession({
  taskId,
  amount,
  userId,
  bidId,
  doerId,
}: {
  taskId: string;
  amount: number;
  userId: string;
  bidId: string;
  doerId: string;
}) {
  try {
    console.log(`Creating checkout session with metadata:`, { taskId, userId, bidId, doerId });
    
    if (!taskId || !userId || !bidId || !doerId) {
      console.error('Missing required parameters for checkout session');
      throw new Error('Missing required parameters for checkout session');
    }
    
    // Amount needs to be in cents for Stripe
    const amountInCents = Math.round(amount * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Task Payment',
              description: `Payment for task #${taskId}`,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?taskId=${taskId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/poster/tasks/${taskId}?payment=canceled`,
      metadata: {
        taskId,
        userId,
        bidId,
        doerId,
      },
    });

    console.log(`Checkout session created successfully:`, { 
      sessionId: session.id,
      metadata: session.metadata
    });
    
    return { url: session.url, sessionId: session.id };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

// Function to verify a payment
export async function verifyPayment(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      success: session.payment_status === 'paid',
      sessionId: session.id,
      metadata: session.metadata,
    };
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
}

// Function to create a refund
export async function createRefund(paymentIntentId: string, amount?: number) {
  try {
    const refundParams: Stripe.RefundCreateParams = {
      payment_intent: paymentIntentId,
    };

    // If amount is specified, add it to refund params (amount in cents)
    if (amount) {
      refundParams.amount = Math.round(amount * 100);
    }

    const refund = await stripe.refunds.create(refundParams);
    
    return {
      success: refund.status === 'succeeded',
      refundId: refund.id,
    };
  } catch (error) {
    console.error('Error creating refund:', error);
    throw error;
  }
} 