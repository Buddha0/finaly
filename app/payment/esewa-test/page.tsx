"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PaymentButton from "@/app/components/PaymentButton";

export default function EsewaTestPage() {
  const [amount, setAmount] = useState<number>(100);
  const [assignmentId, setAssignmentId] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [assignments, setAssignments] = useState<any[]>([]);

  async function fetchOpenAssignments() {
    setIsFetching(true);
    setError("");
    try {
      const response = await fetch('/api/assignments?status=OPEN');
      const data = await response.json();
      
      if (data.success && data.assignments.length > 0) {
        setAssignments(data.assignments);
        // Set first assignment as default
        setAssignmentId(data.assignments[0].id);
      } else {
        setError("No open assignments found. Please create an assignment first.");
      }
    } catch (err) {
      setError("Failed to fetch assignments");
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-8">eSewa Payment Integration Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Test Payment</CardTitle>
            <CardDescription>
              Test the eSewa payment integration by making a payment to the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="amount">Amount (NPR)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  min={1}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="assignment">Assignment</Label>
                {assignments.length === 0 ? (
                  <div className="mt-2">
                    <Button 
                      onClick={fetchOpenAssignments}
                      variant="outline"
                      disabled={isFetching}
                    >
                      {isFetching ? "Loading..." : "Fetch Open Assignments"}
                    </Button>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                  </div>
                ) : (
                  <select
                    id="assignment"
                    className="w-full mt-1 p-2 border rounded"
                    value={assignmentId}
                    onChange={(e) => setAssignmentId(e.target.value)}
                  >
                    {assignments.map((assignment) => (
                      <option key={assignment.id} value={assignment.id}>
                        {assignment.title} - ${assignment.budget}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              
              {assignmentId && (
                <PaymentButton 
                  assignmentId={assignmentId}
                  amount={amount}
                  buttonText="Pay with eSewa"
                />
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>eSewa Integration Information</CardTitle>
            <CardDescription>
              Test credentials and implementation details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium">Test Credentials</h3>
              <ul className="text-sm mt-1 space-y-1">
                <li><strong>eSewa ID:</strong> 9806800001</li>
                <li><strong>Password:</strong> Nepal@123</li>
                <li><strong>Token:</strong> 123456</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium">Implementation Notes</h3>
              <ul className="text-sm mt-1 list-disc pl-5 space-y-1">
                <li>Payments are processed in sandbox/test mode</li>
                <li>Funds are held in escrow until task completion</li>
                <li>eSewa transaction IDs are stored for reference</li>
                <li>Payment status is automatically updated</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 