"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { WebRTCManager } from '@/lib/webrtc';
import { pusherClient } from '@/lib/pusher';
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface VideoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  assignmentId: string;
  localUserId: string;
  remoteUserId: string;
  remoteName: string;
  isIncoming: boolean; // This will always be false now
  incomingSignal: any; // This will always be null now
}

export default function VideoCallModal({
  isOpen,
  onClose,
  assignmentId,
  localUserId,
  remoteUserId,
  remoteName,
  isIncoming, // Unused but kept for compatibility
  incomingSignal // Unused but kept for compatibility
}: VideoCallModalProps) {
  const [callStatus, setCallStatus] = useState<
    'connecting' | 'connected' | 'disconnected' | 'failed'
  >('connecting');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const webrtcRef = useRef<WebRTCManager | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false); // Ref to track if we're in the process of closing
  
  // Helper function to send a call-ended signal directly via API
  const sendCallEndedSignal = async () => {
    try {
      // Send the call-ended signal via the API
      await fetch('/api/videocall/signal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'call-ended',
          from: localUserId,
          to: remoteUserId,
          channelName: `assignment-${assignmentId}-call`,
        }),
      });
      console.log('Sent direct call-ended signal to:', remoteUserId);
    } catch (error) {
      console.error('Failed to send direct call-ended signal:', error);
    }
  };
  
  // Function to safely end the call and clean up
  const safelyEndCall = async (sendSignal = true) => {
    // Only proceed if we haven't already started closing
    if (closingRef.current) return;
    
    // Mark that we're closing
    closingRef.current = true;
    console.log('Safely ending call, sending signal:', sendSignal);
    
    // If WebRTC hasn't initialized yet but we're closing, 
    // send a signal directly via API
    if (!webrtcRef.current && sendSignal) {
      await sendCallEndedSignal();
    } else if (webrtcRef.current) {
      // Use WebRTCManager if available
      if (sendSignal) {
        webrtcRef.current.endCall();
      } else {
        webrtcRef.current.cleanup(false);
      }
    }
    
    // Set status to disconnected
    setCallStatus('disconnected');
  };
  
  // Setup WebRTC connection when the modal is opened
  useEffect(() => {
    if (!isOpen) return;
    
    // Reset closing flag when dialog opens
    closingRef.current = false;

    // Add a small delay to ensure the modal is fully rendered
    const initTimeout = setTimeout(() => {
      // Ensure video elements are properly rendered before proceeding
      if (!localVideoRef.current || !remoteVideoRef.current) {
        console.error('Video elements not yet available');
        setConnectionError('Video elements not available. Please try again.');
        return;
      }

      const channelName = `assignment-${assignmentId}-call`;
      const apiEndpoint = '/api/videocall/signal';

      console.log(`Setting up outgoing call for channel ${channelName}`);

      // Initialize WebRTC manager
      const webrtcManager = new WebRTCManager({
        signalApiEndpoint: apiEndpoint,
        localUserId,
        remoteUserId,
        channelName,
      });

      // Set up callbacks for media streams
      webrtcManager.onLocalStream = (stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      };

      webrtcManager.onRemoteStream = (stream) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = stream;
        }
      };

      webrtcManager.onConnectionStateChange = (state) => {
        console.log(`Connection state changed to: ${state}`);
        if (state === 'connected') {
          setCallStatus('connected');
        } else if (state === 'disconnected' || state === 'failed' || state === 'closed') {
          setCallStatus('disconnected');
          
          // If we disconnect unexpectedly (not from user action), 
          // ensure we clean up properly
          if (!closingRef.current) {
            safelyEndCall(false);
            setTimeout(() => {
              onClose();
            }, 500);
          }
        }
      };

      webrtcManager.onError = (error) => {
        console.error('WebRTC error:', error);
        setConnectionError(error);
        setCallStatus('failed');
      };

      // Setup Pusher for signaling
      const pusherChannel = pusherClient.subscribe(channelName);
      
      pusherChannel.bind('call-signal', (data: any) => {
        if (data.to === localUserId) {
          console.log(`Received signal: ${data.type} from ${data.from} to ${data.to}`);
          
          // Handle call-ended signal specially to close the modal
          if (data.type === 'call-ended') {
            console.log('Call ended by remote user');
            
            // Mark that we're closing so we don't send another signal
            closingRef.current = true;
            
            if (webrtcManager) {
              // Don't send another call-ended signal to avoid loops
              webrtcManager.cleanup(false);
            }
            
            setCallStatus('disconnected');
            // Use a short timeout to let the user see the call ended message
            setTimeout(() => {
              onClose();
            }, 1500);
            return;
          }
          
          // Process all other signals normally
          webrtcManager.handleIncomingSignal(data);
        }
      });

      const init = async () => {
        try {
          console.log('Initializing WebRTC...');
          await webrtcManager.initialize();
          console.log('WebRTC initialized successfully');
          
          // Store the manager reference
          webrtcRef.current = webrtcManager;
          
          // Always initiate an outgoing call
          console.log('Starting new outgoing call');
          await webrtcManager.startCall(localUserId.split('-')[0]);
        } catch (error) {
          console.error('Failed to initialize WebRTC:', error);
          setConnectionError('Failed to initialize call: ' + (error as Error).message);
          setCallStatus('failed');
          
          // Try to send a direct call-ended signal if WebRTC initialization fails
          sendCallEndedSignal();
        }
      };

      init();

      return () => {
        console.log('Cleaning up WebRTC...', closingRef.current);
        if (webrtcRef.current && !closingRef.current) {
          // Only send call-ended signal if we're not already in closing process
          webrtcRef.current.endCall();
        }
        pusherClient.unsubscribe(channelName);
        webrtcRef.current = null;
      };
    }, 500); // 500ms delay

    return () => {
      clearTimeout(initTimeout);
    };
  }, [isOpen, assignmentId, localUserId, remoteUserId, onClose]);

  const toggleAudio = () => {
    if (webrtcRef.current) {
      webrtcRef.current.setAudioEnabled(!audioEnabled);
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = () => {
    if (webrtcRef.current) {
      webrtcRef.current.setVideoEnabled(!videoEnabled);
      setVideoEnabled(!videoEnabled);
    }
  };

  const endCall = async () => {
    await safelyEndCall(true);
    
    // Use a small delay to show the "Call Ended" message before closing
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      // When dialog is closed by clicking outside or pressing escape
      if (!open) {
        // End call properly before closing the modal
        safelyEndCall(true);
        
        // Add a small delay before finally closing
        setTimeout(() => {
          onClose();
        }, 500);
      }
    }}>
      <DialogContent className="sm:max-w-[800px] md:max-w-[900px] max-h-[90vh] p-4 overflow-hidden" ref={dialogRef}>
        <DialogHeader className="mb-2">
          <DialogTitle className="flex items-center">
            {callStatus === 'connected' 
              ? (
                <>
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span>In call with {remoteName}</span>
                </>
              ) 
              : callStatus === 'disconnected' 
                ? 'Call Ended' 
                : `Calling ${remoteName}`}
          </DialogTitle>
        </DialogHeader>
        
        {connectionError && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {connectionError}
          </div>
        )}
        
        <div className="w-full">
          {/* Remote video (large) */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video w-full">
            <video 
              ref={remoteVideoRef}
              autoPlay 
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />
            {callStatus === 'connecting' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white">
                <div className="text-center">
                  <p className="text-xl">Connecting...</p>
                  <div className="mt-2 flex justify-center">
                    <div className="animate-pulse flex space-x-2">
                      <div className="h-3 w-3 bg-white rounded-full"></div>
                      <div className="h-3 w-3 bg-white rounded-full animation-delay-200"></div>
                      <div className="h-3 w-3 bg-white rounded-full animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {callStatus === 'disconnected' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white">
                <div className="text-center">
                  <p className="text-xl">Call Ended</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Local video (small) */}
          <div className="absolute right-6 top-20 w-1/4 md:w-1/5 aspect-video shadow-lg rounded-lg overflow-hidden z-10">
            <video 
              ref={localVideoRef}
              autoPlay 
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover bg-gray-800"
            />
          </div>
        </div>
        
        {/* Call controls */}
        <div className="flex justify-center space-x-4 mt-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleAudio}
            disabled={callStatus === 'disconnected'}
          >
            {audioEnabled ? <Mic /> : <MicOff className="text-red-500" />}
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleVideo}
            disabled={callStatus === 'disconnected'}
          >
            {videoEnabled ? <Video /> : <VideoOff className="text-red-500" />}
          </Button>
          
          <Button 
            variant="destructive" 
            size="icon" 
            onClick={endCall}
          >
            <PhoneOff />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 