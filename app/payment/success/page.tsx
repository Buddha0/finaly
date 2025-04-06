"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const taskId = searchParams.get("taskId");
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!taskId) {
        setError("Task ID not found in URL");
        setVerifying(false);
        return;
      }

      try {
        // Call our verification endpoint
        const response = await fetch('/api/payments/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ taskId }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Failed to verify payment");
          setVerifying(false);
          return;
        }

        // Even if successful, check if any message was returned
        if (data.message && data.message !== 'Task status is correct') {
          toast.info(data.message);
        }

        setVerifying(false);

        // Start countdown and progress
        startCountdown();
      } catch (error) {
        console.error("Error verifying payment:", error);
        setError("Failed to verify payment status");
        setVerifying(false);
      }
    };

    const startCountdown = () => {
      // Update progress bar
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 4; // Increase by 4% each time (25 steps to reach 100%)
        });
      }, 200);

      // Update countdown timer
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Redirect after 5 seconds
      const redirectTimeout = setTimeout(() => {
        const redirectPath = taskId 
          ? `/dashboard/poster/tasks/${taskId}` 
          : "/dashboard/poster";
        
        router.push(redirectPath);
      }, 5000);

      // Cleanup
      return () => {
        clearInterval(progressInterval);
        clearInterval(countdownInterval);
        clearTimeout(redirectTimeout);
      };
    };

    verifyPayment();
  }, [taskId, router]);

  const handleManualRedirect = () => {
    if (taskId) {
      router.push(`/dashboard/poster/tasks/${taskId}`);
    } else {
      router.push("/dashboard/poster");
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted/30">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-red-600">Payment Verification Error</CardTitle>
            <CardDescription>
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" onClick={handleManualRedirect}>
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (verifying) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted/30">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></span>
            </div>
            <CardTitle className="text-2xl font-bold">Verifying Payment</CardTitle>
            <CardDescription>
              Please wait while we verify your payment...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/30">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">Payment Successful!</CardTitle>
          <CardDescription>
            Your payment has been processed successfully. The task has been assigned to the doer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Redirecting to dashboard in {countdown} seconds</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <Button className="w-full" onClick={handleManualRedirect}>
            Go to Dashboard Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 