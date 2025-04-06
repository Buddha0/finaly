"use client"

import { v4 as uuidv4 } from 'uuid'

interface WebRTCManagerOptions {
  signalApiEndpoint: string
  localUserId: string
  remoteUserId: string
  channelName: string
}

export class WebRTCManager {
  protected peerConnection: RTCPeerConnection | null = null
  protected localStream: MediaStream | null = null
  protected remoteStream: MediaStream | null = null
  private signalApiEndpoint: string
  private localUserId: string
  private remoteUserId: string
  private channelName: string
  
  // Queue to store ICE candidates that arrive before remote description is set
  private iceCandidateQueue: RTCIceCandidate[] = []
  
  // Keep track of processed signal IDs to prevent duplicates
  private processedSignalIds: Set<string> = new Set()
  
  // Callback handlers
  public onConnectionStateChange: ((state: string) => void) | null = null
  public onError: ((error: string) => void) | null = null
  public onLocalStream: ((stream: MediaStream) => void) | null = null
  public onRemoteStream: ((stream: MediaStream) => void) | null = null
  
  constructor(options: WebRTCManagerOptions) {
    this.signalApiEndpoint = options.signalApiEndpoint
    this.localUserId = options.localUserId
    this.remoteUserId = options.remoteUserId
    this.channelName = options.channelName
  }

  public async initialize(): Promise<void> {
    try {
      // Create local media stream
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })

      // Notify about local stream
      if (this.localStream && this.onLocalStream) {
        this.onLocalStream(this.localStream);
      }

      // Create remote stream
      this.remoteStream = new MediaStream()
      
      // Notify about remote stream
      if (this.remoteStream && this.onRemoteStream) {
        this.onRemoteStream(this.remoteStream);
      }

      // Initialize peer connection with ICE servers
      this.peerConnection = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' },
          { urls: 'stun:stun2.l.google.com:19302' },
          { urls: 'stun:stun3.l.google.com:19302' },
          { urls: 'stun:stun4.l.google.com:19302' },
        ],
      })

      // Add local tracks to peer connection
      this.localStream.getTracks().forEach(track => {
        if (this.peerConnection && this.localStream) {
          this.peerConnection.addTrack(track, this.localStream)
        }
      })

      // Handle tracks from remote peer
      this.peerConnection.ontrack = (event) => {
        event.streams[0].getTracks().forEach(track => {
          if (this.remoteStream) {
            this.remoteStream.addTrack(track)
          }
        })
      }

      // Handle ICE candidates
      this.peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          this.sendSignal({
            type: 'ice-candidate',
            candidate: event.candidate,
            from: this.localUserId,
            to: this.remoteUserId,
            callId: uuidv4(),
          })
        }
      }

      // Handle connection state changes
      this.peerConnection.onconnectionstatechange = () => {
        if (this.peerConnection && this.onConnectionStateChange) {
          this.onConnectionStateChange(this.peerConnection.connectionState)
        }
      }
      
      console.log('WebRTC initialized successfully')
    } catch (error) {
      console.error('Failed to initialize WebRTC:', error)
      if (this.onError) {
        this.onError('Failed to initialize media devices: ' + (error as Error).message)
      }
      throw error
    }
  }

  // Start a call by creating and sending an offer
  public async startCall(userName?: string): Promise<void> {
    if (!this.peerConnection) {
      if (this.onError) this.onError('Peer connection not initialized')
      return
    }

    try {
      console.log("Creating and sending offer")
      const offer = await this.peerConnection.createOffer()
      await this.peerConnection.setLocalDescription(offer)

      this.sendSignal({
        type: 'offer',
        sdp: this.peerConnection.localDescription,
        from: this.localUserId,
        to: this.remoteUserId,
        senderName: userName || 'User',
        callId: uuidv4(),
      })
    } catch (error) {
      console.error('Failed to start call:', error)
      if (this.onError) {
        this.onError('Failed to start call: ' + (error as Error).message)
      }
    }
  }

  // Handle incoming signals (offer, answer, ice-candidate, call-ended)
  public async handleIncomingSignal(signal: any): Promise<void> {
    if (!this.peerConnection) {
      if (this.onError) this.onError('Peer connection not initialized')
      return
    }

    try {
      // Skip if we've already processed this exact signal
      if (signal.callId && this.processedSignalIds.has(signal.callId)) {
        console.log(`Ignoring duplicate signal with ID: ${signal.callId}`);
        return;
      }
      
      // Record this signal as processed if it has an ID
      if (signal.callId) {
        this.processedSignalIds.add(signal.callId);
      }
      
      console.log("Handling signal type:", signal.type);
      
      if (signal.type === 'offer' && signal.sdp) {
        // Set remote description from offer
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp))
        
        // Create and send answer
        const answer = await this.peerConnection.createAnswer()
        await this.peerConnection.setLocalDescription(answer)
        
        this.sendSignal({
          type: 'answer',
          sdp: this.peerConnection.localDescription,
          from: this.localUserId,
          to: signal.from,
          callId: uuidv4(),
        })
        
        // Process any queued ICE candidates
        while (this.iceCandidateQueue.length > 0) {
          const candidate = this.iceCandidateQueue.shift()
          if (candidate) {
            await this.peerConnection.addIceCandidate(candidate)
          }
        }
      } 
      else if (signal.type === 'answer' && signal.sdp) {
        // Set remote description from answer
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp))
        
        // Process any queued ICE candidates
        while (this.iceCandidateQueue.length > 0) {
          const candidate = this.iceCandidateQueue.shift()
          if (candidate) {
            await this.peerConnection.addIceCandidate(candidate)
          }
        }
      } 
      else if (signal.type === 'ice-candidate' && signal.candidate) {
        if (this.peerConnection.remoteDescription) {
          // We can add the ICE candidate immediately
          await this.peerConnection.addIceCandidate(new RTCIceCandidate(signal.candidate))
        } else {
          // Queue the ICE candidate for later
          this.iceCandidateQueue.push(new RTCIceCandidate(signal.candidate))
        }
      } 
      else if (signal.type === 'call-ended') {
        // Call cleanup without sending an additional call-ended signal
        this.cleanup(false)
      }
    } catch (error) {
      console.error('Error handling signal:', error)
      if (this.onError) {
        this.onError('Failed to process signal: ' + (error as Error).message)
      }
    }
  }

  private async sendSignal(signal: any): Promise<void> {
    try {
      const response = await fetch(this.signalApiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...signal,
          channelName: this.channelName,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
    } catch (error) {
      console.error('Failed to send signal:', error)
      if (this.onError) {
        this.onError('Signaling error: ' + (error as Error).message)
      }
    }
  }

  public endCall(): void {
    // Call cleanup with sendSignal=true to ensure the remote party is notified
    this.cleanup(true);
  }

  /**
   * Clean up all WebRTC resources
   * @param sendSignal Whether to send a call-ended signal to the remote party
   */
  public cleanup(sendSignal: boolean = true): void {
    try {
      // Send call-ended signal if requested
      if (sendSignal) {
        this.sendSignal({
          type: 'call-ended',
          from: this.localUserId,
          to: this.remoteUserId,
          callId: uuidv4(),
        });
      }

      // Stop all tracks in the local stream
      if (this.localStream) {
        this.localStream.getTracks().forEach(track => {
          track.stop();
        });
      }

      // Close peer connection and remove event handlers
      if (this.peerConnection) {
        // Remove all event listeners
        if (this.peerConnection.onicecandidate) {
          this.peerConnection.onicecandidate = null;
        }
        if (this.peerConnection.ontrack) {
          this.peerConnection.ontrack = null;
        }
        if (this.peerConnection.onconnectionstatechange) {
          this.peerConnection.onconnectionstatechange = null;
        }
        
        // Close the connection
        this.peerConnection.close();
      }

      // Reset state
      this.localStream = null;
      this.remoteStream = null;
      this.peerConnection = null;
      this.iceCandidateQueue = [];
      this.processedSignalIds.clear();
      
      console.log('Call ended and resources cleaned up');

      // Notify about connection state change
      if (this.onConnectionStateChange) {
        this.onConnectionStateChange('disconnected');
      }
    } catch (error) {
      console.error('Error ending call:', error);
    }
  }

  public setAudioEnabled(enabled: boolean): void {
    if (this.localStream) {
      this.localStream.getAudioTracks().forEach(track => {
        track.enabled = enabled
      })
    }
  }

  public setVideoEnabled(enabled: boolean): void {
    if (this.localStream) {
      this.localStream.getVideoTracks().forEach(track => {
        track.enabled = enabled
      })
    }
  }
} 