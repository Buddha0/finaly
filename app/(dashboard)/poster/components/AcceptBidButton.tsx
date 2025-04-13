import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface AcceptBidButtonProps {
  bidId: string;
  taskId: string;
  amount: number;
}

export function AcceptBidButton({ bidId, taskId, amount }: AcceptBidButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAcceptBid = async () => {
    try {
      setIsLoading(true);

      // Create payment intent via API
      const response = await fetch('/api/stripe/payment-intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bidId, taskId, amount }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Check if the doer needs to onboard with Stripe first
        if (data.requiresOnboarding && data.doerId) {
          toast.info('The doer needs to complete their Stripe account setup first.');
          
          // Initiate doer account setup process
          await initiateDoerOnboarding(data.doerId);
          
          // Maybe redirect to a page that explains the situation
          router.push(`/dashboard/poster/tasks/${taskId}?status=pending_doer_onboarding`);
          return;
        }

        throw new Error(data.error || 'Something went wrong');
      }

      // Get Stripe instance
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Failed to load Stripe');

      // Redirect to the Stripe payment page
      const { error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: {
            token: 'tok_visa', // For demo purposes; use Elements in production
          },
        },
      });

      if (error) {
        throw new Error(error.message || 'Payment failed');
      }

      // Redirect to task detail page after successful payment
      toast.success('Bid accepted and payment processed successfully!');
      router.push(`/dashboard/poster/tasks/${taskId}?status=assigned`);
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || 'Failed to accept bid');
      console.error('Accept bid error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to initiate doer onboarding
  const initiateDoerOnboarding = async (doerId: string) => {
    try {
      // Send notification to doer about Stripe onboarding requirement
      await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: doerId,
          title: 'Complete your Stripe account setup',
          message: 'A poster wants to accept your bid, but you need to complete your Stripe account setup first.',
          type: 'STRIPE_SETUP',
          link: '/doer/verification/stripe',
        }),
      });

      toast.success('Doer has been notified to complete their Stripe setup');
    } catch (error) {
      console.error('Failed to notify doer:', error);
    }
  };

  return (
    <Button 
      onClick={handleAcceptBid}
      disabled={isLoading}
      className="w-full bg-green-600 hover:bg-green-700"
    >
      {isLoading ? 'Processing...' : 'Accept Bid & Pay'}
    </Button>
  );
} 