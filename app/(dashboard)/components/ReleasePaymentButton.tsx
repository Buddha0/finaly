"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ReleasePaymentButtonProps {
  taskId: string;
  paymentId: string;
  disabled?: boolean;
  onSuccess?: () => void;
}

export default function ReleasePaymentButton({ 
  taskId, 
  paymentId, 
  disabled = false,
  onSuccess 
}: ReleasePaymentButtonProps) {
  const [isReleasing, setIsReleasing] = useState(false);

  const handleReleasePayment = async () => {
    if (!confirm("Are you sure you want to release the payment to the doer? This action cannot be undone.")) {
      return;
    }
    
    setIsReleasing(true);
    try {
      const response = await fetch('/api/payments/release-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          paymentId,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Payment released successfully!");
        if (onSuccess) onSuccess();
      } else {
        toast.error(data.error || "Failed to release payment");
      }
    } catch (error) {
      console.error("Error releasing payment:", error);
      toast.error("An error occurred while releasing payment");
    } finally {
      setIsReleasing(false);
    }
  };

  return (
    <Button 
      onClick={handleReleasePayment}
      disabled={disabled || isReleasing}
      variant="default"
    >
      {isReleasing ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          Releasing...
        </>
      ) : "Release Payment to Doer"}
    </Button>
  );
} 