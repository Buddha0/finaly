import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios from 'axios';

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

      // First, initiate eSewa payment process
      const response = await axios.post('/api/payments/initiate', {
        assignmentId: taskId,
        amount,
      });

      if (!response.data.success) {
        throw new Error(response.data.error || 'Failed to initiate payment');
      }

      // Accept the bid and update assignment status
      const acceptResponse = await axios.post('/api/bids/accept', {
        bidId,
        taskId,
      });

      if (!acceptResponse.data.success) {
        throw new Error(acceptResponse.data.error || 'Failed to accept bid');
      }

      const { formData, esewaUrl } = response.data;
      
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = esewaUrl;
      form.style.display = 'none';

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      });

      // Append form to body and submit
      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
      }, 100);

    } catch (error: any) {
      toast.error(error.message || 'Failed to accept bid');
      console.error('Accept bid error:', error);
    } finally {
      setIsLoading(false);
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