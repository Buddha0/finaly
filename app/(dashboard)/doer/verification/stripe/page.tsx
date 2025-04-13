"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

function StripeVerificationContent() {
  const [isLoading, setIsLoading] = useState(false);
  // const [onboardingUrl, setOnboardingUrl] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const success = searchParams.get("success");
  const error = searchParams.get("error");

  useEffect(() => {
    // Show success/error messages if returning from Stripe onboarding
    if (success) {
      toast.success("Stripe account setup completed successfully!");
    } else if (error) {
      toast.error("There was an issue with your Stripe account setup. Please try again.");
    }
  }, [success, error]);

  const handleSetupStripe = async () => {
    try {
      setIsLoading(true);
      
      // Call our API to create a Stripe Connect account or get onboarding link
      const response = await fetch("/api/stripe/connect/create-express-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to create Stripe account");
      }
      
      // If we got an onboarding URL, redirect to it
      if (data.url) {
        window.location.href = data.url;
      } else {
        // setOnboardingUrl(null);
        toast.error("No onboarding URL returned");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
      console.error("Stripe setup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Stripe Account Setup</CardTitle>
          <CardDescription>
            Set up your Stripe account to receive payments for completed tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          {success ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <h3 className="text-xl font-semibold">Account Setup Complete</h3>
              <p className="text-center text-muted-foreground">
                Your Stripe account has been successfully set up. You can now receive payments for tasks.
              </p>
              <Button onClick={() => router.push("/dashboard/doer")}>
                Return to Dashboard
              </Button>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <XCircle className="h-16 w-16 text-red-500" />
              <h3 className="text-xl font-semibold">Account Setup Incomplete</h3>
              <p className="text-center text-muted-foreground">
                There was an issue with your Stripe account setup. Please try again.
              </p>
              <Button onClick={handleSetupStripe} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Setting up...
                  </>
                ) : (
                  "Retry Account Setup"
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                <h3 className="text-lg font-medium">Benefits of Stripe Connect</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  <li>Secure payment processing</li>
                  <li>Fast payouts to your bank account</li>
                  <li>Protection against fraud</li>
                  <li>Detailed transaction history</li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                <h3 className="text-lg font-medium">What you will need</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  <li>Personal information</li>
                  <li>Bank account details for receiving payments</li>
                  <li>A valid ID document</li>
                </ul>
              </div>
              
              <Button
                onClick={handleSetupStripe}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Setting up...
                  </>
                ) : (
                  "Set Up Stripe Account"
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Loading component for Suspense fallback
function LoadingPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Stripe Account Setup</CardTitle>
          <CardDescription>
            Setting up your payment options...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Loading account information...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function StripeVerificationPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <StripeVerificationContent />
    </Suspense>
  );
} 