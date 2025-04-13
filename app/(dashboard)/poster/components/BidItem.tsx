"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { acceptBid } from '../actions/accept-bid';
import { AcceptBidButton } from './AcceptBidButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BidItemProps {
  bid: {
    id: string;
    bidAmount: number;
    coverLetter: string;
    createdAt: Date;
    user: {
      id: string;
      name: string;
      image: string;
      rating: number;
    };
    assignmentId: string;
  };
}

export function BidItem({ bid }: BidItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [bidDetails, setBidDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAcceptClick = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Use the server action to get bid details and check eligibility
      const result = await acceptBid(bid.id);
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      // Store the result for use in the payment flow
      setBidDetails(result);
      setShowDialog(true);
    } catch (error: any) {
      setError(error.message || 'Something went wrong');
      console.error('Error accepting bid:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="mb-4">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={bid.user.image} alt={bid.user.name} />
                <AvatarFallback>{bid.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{bid.user.name}</h3>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">${bid.bidAmount.toFixed(2)}</span>
                  {' • '}
                  <span>⭐ {bid.user.rating.toFixed(1)}</span>
                  {' • '}
                  <span>
                    Bid {formatDistanceToNow(new Date(bid.createdAt), { addSuffix: true })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm">{bid.coverLetter}</p>
          </div>
          
          {error && (
            <div className="mt-2 text-sm text-red-500">{error}</div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-end space-x-2 pt-0">
          <Button
            variant="outline"
            size="sm"
            disabled={isLoading}
          >
            Message
          </Button>
          <Button
            size="sm"
            onClick={handleAcceptClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Accept Bid'
            )}
          </Button>
        </CardFooter>
      </Card>
      
      {/* Payment confirmation dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Accept Bid & Process Payment</DialogTitle>
            <DialogDescription>
              You are about to accept this bid and make a payment of ${bidDetails?.amount?.toFixed(2)}.
              The funds will be held in escrow until the task is completed.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bid amount:</span>
                <span className="font-medium">${bidDetails?.amount?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform fee:</span>
                <span className="font-medium">${bidDetails?.amount ? (bidDetails.amount * 0.1).toFixed(2) : "0.00"}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Total payment:</span>
                <span className="font-bold">${bidDetails?.amount ? (bidDetails.amount).toFixed(2) : "0.00"}</span>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row sm:space-x-2">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            {bidDetails && (
              <AcceptBidButton 
                bidId={bidDetails.bidId} 
                taskId={bidDetails.taskId} 
                amount={bidDetails.amount} 
              />
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
} 