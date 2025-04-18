"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EsewaPaymentForm } from "@/components/esewa-payment-form";
import { toast } from "sonner";

export default function PaymentTestPage() {
  const [taskId, setTaskId] = useState("");
  const [bidId, setBidId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const testPaymentInitiation = async () => {
    if (!taskId || !bidId) {
      setError("Please enter both Task ID and Bid ID");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setPaymentData(null);
      setApiResponse(null);

      const response = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskId,
          bidId,
        }),
      });

      const result = await response.json();
      setApiResponse(result);

      if (response.ok && result.success) {
        setPaymentData(result.data);
      } else {
        setError(result.error || "Failed to initiate payment");
      }
    } catch (error) {
      console.error("Error in test payment:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const clearExistingPayment = async () => {
    if (!taskId) {
      setError("Please enter a Task ID");
      return;
    }

    try {
      setIsClearing(true);
      setError(null);

      const response = await fetch("/api/payments/clear-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskId,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Existing payment cleared successfully");
      } else {
        setError(result.error || "Failed to clear payment");
        toast.error(result.error || "Failed to clear payment");
      }
    } catch (error) {
      console.error("Error clearing payment:", error);
      setError("An unexpected error occurred");
      toast.error("An unexpected error occurred");
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">eSewa Payment Test Page</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Test Payment Initiation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="taskId">Task ID</Label>
              <Input
                id="taskId"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
                placeholder="Enter Task ID"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bidId">Bid ID</Label>
              <Input
                id="bidId"
                value={bidId}
                onChange={(e) => setBidId(e.target.value)}
                placeholder="Enter Bid ID"
              />
            </div>
            
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
                {error}
              </div>
            )}
            
            <div className="flex gap-2">
              <Button 
                onClick={testPaymentInitiation}
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? "Processing..." : "Test Payment Initiation"}
              </Button>
              
              <Button 
                onClick={clearExistingPayment}
                disabled={isClearing}
                variant="outline"
                className="flex-none"
              >
                {isClearing ? "Clearing..." : "Clear Existing Payment"}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Response</CardTitle>
          </CardHeader>
          <CardContent>
            {apiResponse ? (
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-60 text-xs">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                API response will appear here
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      
      {paymentData && (
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Payment Form Test</CardTitle>
            </CardHeader>
            <CardContent>
              <EsewaPaymentForm
                formData={paymentData.formData}
                paymentUrl={paymentData.paymentUrl}
                onCancel={() => setPaymentData(null)}
              />
            </CardContent>
          </Card>
        </div>
      )}
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Environment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">APP_URL: </span>
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {process.env.NEXT_PUBLIC_APP_URL || "Not set"}
                </code>
              </div>
              <div>
                <span className="font-medium">Node Environment: </span>
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {process.env.NODE_ENV}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 