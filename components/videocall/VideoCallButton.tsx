"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { VideoIcon, PhoneOff } from 'lucide-react';
import VideoCallModal from './VideoCallModal';
import { pusherClient } from '@/lib/pusher';
import { v4 as uuidv4 } from 'uuid';

interface VideoCallButtonProps {
  assignmentId: string;
  localUserId: string;
  localName: string;
  remoteUserId: string;
  remoteName: string;
}

export default function VideoCallButton({
  assignmentId,
  localUserId,
  localName,
  remoteUserId,
  remoteName,
}: VideoCallButtonProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  
  // Use this ref for checking in event handlers (not for rendering)
  const activeCallRef = useRef<{
    withUserId: string | null;
    callId: string | null;
  }>({
    withUserId: null,
    callId: null
  });
  
  // Store current channel for easy access during cleanup
  const channelRef = useRef<any>(null);
  
  // Update call active state when modal opens/closes
  useEffect(() => {
    // Use the state setter for setting isCallActive (this will trigger re-renders)
    setIsCallActive(isCallModalOpen);
    
    if (isCallModalOpen) {
      // Generate a unique call ID if starting a new call
      if (!activeCallRef.current.callId) {
        activeCallRef.current.callId = uuidv4();
      }
      activeCallRef.current.withUserId = remoteUserId;
    } else {
      // If modal is closing, reset the call ID after a delay to ensure cleanup completes
      const callId = activeCallRef.current.callId;
      setTimeout(() => {
        // Only reset if it's still the same call ID (prevent race conditions)
        if (activeCallRef.current.callId === callId) {
          activeCallRef.current.callId = null;
          activeCallRef.current.withUserId = null;
        }
      }, 1000);
    }
    
    return () => {
      // Reset state when component unmounts
      setIsCallActive(false);
    };
  }, [isCallModalOpen, remoteUserId]);
  
  const handleStartCall = useCallback(() => {
    // Don't allow starting a new call if already in one
    if (isCallActive) return;
    
    setIsCallModalOpen(true);
  }, [isCallActive]);
  
  const handleCloseModal = useCallback(() => {
    console.log('Closing call modal, sending call-ended signal');
    
    // Send call-ended signal when closing the modal
    sendCallEndedSignal(remoteUserId);
    
    setIsCallModalOpen(false);
    setIsCallActive(false);
  }, [remoteUserId]);
  
  const sendCallEndedSignal = async (targetUserId: string) => {
    try {
      // Send the call-ended signal via the API
      await fetch('/api/videocall/signal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'call-ended',
          from: localUserId,
          to: targetUserId,
          channelName: `assignment-${assignmentId}-call`,
          callId: activeCallRef.current.callId
        }),
      });
      console.log('Sent call-ended signal to target:', targetUserId);
    } catch (error) {
      console.error('Failed to send call-ended signal:', error);
    }
  };
  
  useEffect(() => {
    // Listen for signals but don't process incoming calls
    const channelName = `assignment-${assignmentId}-call`;
    const channel = pusherClient.subscribe(channelName);
    
    // Store channel reference for easy access elsewhere
    channelRef.current = channel;
        
    return () => {
      // Clean up
      channel.unbind('call-signal');
      pusherClient.unsubscribe(channelName);
      channelRef.current = null;
    };
  }, [assignmentId, localUserId]);

  return (
    <>
      <div className="relative">
        <Button 
          onClick={handleStartCall} 
          variant="outline"
          className="flex items-center rounded-full h-10 w-10 p-0 justify-center"
          disabled={isCallActive}
          title={isCallActive ? "Already in a call" : "Start video call"}
        >
          <VideoIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Only render the modal when it's needed and for outgoing calls only */}
      {isCallModalOpen && (
        <VideoCallModal
          isOpen={isCallModalOpen}
          onClose={handleCloseModal}
          assignmentId={assignmentId}
          localUserId={localUserId}
          remoteUserId={remoteUserId}
          remoteName={remoteName}
          isIncoming={false}
          incomingSignal={null}
        />
      )}
    </>
  );
} 