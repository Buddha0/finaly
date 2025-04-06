"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import { pusherClient } from "@/lib/pusher";
import { sendMessage } from "@/actions/send-message";
import { getMessages } from "@/actions/get-messages";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";
import VideoCallButton from '@/components/videocall/VideoCallButton';
import { useToast } from '@/components/ui/use-toast';

type Message = {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
  sender: {
    id: string;
    name: string | null;
    image: string | null;
  };
};

interface ChatInterfaceProps {
  assignmentId: string;
  receiverId: string;
}

// Helper function to safely parse JSON from localStorage
const getSavedMessages = (key: string): Message[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return [];
    return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to parse saved messages:", e);
    return [];
  }
};

// Helper function to safely save messages to localStorage
const saveMessages = (key: string, messages: Message[]) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, JSON.stringify(messages));
  } catch (e) {
    console.error("Failed to save messages:", e);
  }
};

// Helper function to debounce function calls
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function ChatInterface({ assignmentId, receiverId }: ChatInterfaceProps) {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReceiverTyping, setIsReceiverTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Local storage key for this chat
  const storageKey = `chat-messages-${assignmentId}`;
  
  // A map to keep track of processed message IDs
  const processedMessageIds = useRef(new Set<string>());

  // Load saved messages from localStorage on initialization
  useEffect(() => {
    if (!assignmentId) return;
    
    // Try to get cached messages first while waiting for database
    const savedMessages = getSavedMessages(storageKey);
    if (savedMessages.length > 0) {
      console.log(`Loaded ${savedMessages.length} cached messages from localStorage`);
      setMessages(savedMessages);
      
      // Add message IDs to processed set
      savedMessages.forEach(msg => {
        processedMessageIds.current.add(msg.id);
      });
    }
  }, [assignmentId, storageKey]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(storageKey, messages);
      console.log(`Saved ${messages.length} messages to localStorage`);
    }
  }, [messages, storageKey]);

  // Fetch messages on component mount - this only happens once
  useEffect(() => {
    let isMounted = true; // Add a mounted flag to prevent state updates after unmount
    
    const fetchMessages = async () => {
      if (!assignmentId) {
        setError("No assignment ID provided");
        setIsLoadingMessages(false);
        return;
      }
      
      setIsLoadingMessages(true);
      setError(null);
      
      try {
        console.log("Fetching messages for assignment:", assignmentId);
        const response = await getMessages(assignmentId);
        
        // Check if component is still mounted before updating state
        if (!isMounted) return;
        
        if (response.success && response.data) {
          console.log(`Received ${response.data.length} messages from server`);
          
          // Create a new Set with existing processed IDs
          const existingIds = new Set(processedMessageIds.current);
          
          // Reset the processed IDs before initializing with database messages
          processedMessageIds.current = new Set<string>();
          
          // Add all fetched message IDs to the processed set
          response.data.forEach((msg: Message) => {
            processedMessageIds.current.add(msg.id);
          });
          
          // Combine existing messages with fetched ones, avoiding duplicates
          setMessages(prevMessages => {
            // If we have no previous messages, just use the fetched ones
            if (prevMessages.length === 0) {
              return response.data as Message[];
            }
            
            // Otherwise, merge them while preserving order and removing duplicates
            const combinedMessages = [...prevMessages];
            
            // Add any new messages from the server
            response.data.forEach((msg: Message) => {
              if (!existingIds.has(msg.id)) {
                combinedMessages.push(msg as Message);
              }
            });
            
            // Sort by creation time to ensure order
            return combinedMessages.sort((a, b) => 
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          });
        } else {
          console.error("Error in response:", response.error);
          setError(response.error || "Failed to load messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        if (isMounted) {
          setError("Failed to load messages. Please try again.");
        }
      } finally {
        if (isMounted) {
          setIsLoadingMessages(false);
        }
      }
    };

    fetchMessages();
    
    // Cleanup function to prevent updates after unmount
    return () => {
      isMounted = false;
    };
  }, [assignmentId]); // Only run when assignmentId changes

  // Explicitly reset typing status when component unmounts or conversation changes
  useEffect(() => {
    // When component mounts, ensure any previous typing indicators are cleared
    setIsReceiverTyping(false);
    
    // When component unmounts or assignmentId/receiverId changes,
    // explicitly send typing-stop event to clean up any lingering indicators
    return () => {
      if (user?.id) {
        emitTypingStatus(false);
      }
    };
  }, [assignmentId, receiverId]);

  // Set up Pusher subscription - separate from message fetching
  useEffect(() => {
    if (!assignmentId || !user?.id) return;
    
    console.log("Setting up Pusher subscription for channel:", `assignment-${assignmentId}`);
    
    // Store the channel reference so we can properly clean up
    const channelName = `assignment-${assignmentId}`;
    const channel = pusherClient.subscribe(channelName);
    
    // Define message handler
    const handleNewMessage = (newMessage: Message) => {
      console.log("Received new message from Pusher:", newMessage);
      
      // Only add the message if we haven't processed it before
      if (!processedMessageIds.current.has(newMessage.id)) {
        processedMessageIds.current.add(newMessage.id);
        setMessages((current) => [...current, newMessage]);
        
        // Reset typing indicator when we receive a message
        if (newMessage.senderId === receiverId) {
          setIsReceiverTyping(false);
        }
        
        console.log("Added new message to state, messages count:", messages.length + 1);
      } else {
        console.log("Skipping duplicate message:", newMessage.id);
      }
    };
    
    // Handle typing events
    const handleTypingStart = (data: { userId: string }) => {
      console.log("Typing start event:", data);
      
      // Only show typing indicator if the other user is typing
      if (data.userId === receiverId) {
        setIsReceiverTyping(true);
      }
    };
    
    const handleTypingStop = (data: { userId: string }) => {
      console.log("Typing stop event:", data);
      
      // Only hide typing indicator if the other user stopped typing
      if (data.userId === receiverId) {
        setIsReceiverTyping(false);
      }
    };
    
    // Bind the handlers
    channel.bind('new-message', handleNewMessage);
    channel.bind('typing-start', handleTypingStart);
    channel.bind('typing-stop', handleTypingStop);

    // Cleanup function
    return () => {
      console.log("Cleaning up Pusher subscription for:", channelName);
      channel.unbind('new-message', handleNewMessage);
      channel.unbind('typing-start', handleTypingStart);
      channel.unbind('typing-stop', handleTypingStop);
      pusherClient.unsubscribe(channelName);
    };
  }, [assignmentId, receiverId, user?.id]); // Only dependent on assignmentId and receiverId

  // Scroll to bottom when messages change or when typing indicator appears/disappears
  useEffect(() => {
    // Only scroll automatically when new messages arrive, not for typing indicators
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Removed isReceiverTyping dependency

  // Emit typing status to other users
  const emitTypingStatus = async (isTyping: boolean) => {
    if (!assignmentId || !user?.id) return;
    
    try {
      const eventName = isTyping ? 'typing-start' : 'typing-stop';
      await fetch('/api/pusher/typing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assignmentId,
          userId: user.id,
          isTyping,
        }),
      });
    } catch (error) {
      console.error("Failed to emit typing status:", error);
    }
  };

  // Create a debounced version of the typing stop function
  const debouncedTypingStop = useRef(
    debounce(() => emitTypingStatus(false), 2000)
  ).current;

  // Handle input changes and emit typing status
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewMessage(value);
    
    // Only emit typing events if there's actually content
    if (value.trim().length > 0) {
      // Send typing start event
      emitTypingStatus(true);
      
      // Set a debounced typing stop event
      debouncedTypingStop();
    } else {
      // If input is cleared, explicitly stop typing indicator
      emitTypingStatus(false);
    }
  };

  // Add a safety timeout to clear typing status after inactivity
  useEffect(() => {
    // Set a safety timeout to clear typing indicator after 10 seconds of no updates
    const safetyTimer = setTimeout(() => {
      if (isReceiverTyping) {
        console.log("Safety timeout: clearing typing indicator after inactivity");
        setIsReceiverTyping(false);
      }
    }, 10000);
    
    return () => clearTimeout(safetyTimer);
  }, [isReceiverTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !user?.id) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      console.log("Sending message:", {
        content: newMessage.trim(),
        assignmentId,
        receiverId,
        senderId: user.id
      });
      
      // Immediately emit typing stop when sending message
      emitTypingStatus(false);
      
      const response = await sendMessage(
        newMessage.trim(),
        assignmentId,
        receiverId,
        user.id
      );
      
      if (!response.success) {
        console.error("Error sending message:", response.error);
        setError(response.error || "Failed to send message");
      }
      
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-md">
      <div className="p-3 border-b bg-muted/20 flex justify-between items-center">
        <h3 className="font-medium">Task Communication</h3>
        {user?.id && (
          <VideoCallButton
            assignmentId={assignmentId}
            localUserId={user.id}
            localName={user.fullName || user.firstName || "User"}
            remoteUserId={receiverId}
            remoteName={messages.find(m => m.senderId === receiverId)?.sender?.name || "Remote User"}
          />
        )}
      </div>
      
      <ScrollArea className="flex-1 p-4 w-full overflow-y-auto">
        {error && (
          <div className="bg-red-50 text-red-700 p-3 mb-4 rounded-md border border-red-200">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="text-sm underline mt-1"
            >
              Reload page
            </button>
          </div>
        )}
        
        {isLoadingMessages ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="ml-2">Loading messages...</span>
          </div>
        ) : (
          <div className="space-y-4 w-full">
            {messages.length === 0 ? (
              <p className="text-center text-muted-foreground py-6">
                No messages yet. Start the conversation!
              </p>
            ) : (
              messages.map((message, index) => {
                const isOwn = message.senderId === user?.id;
                
                return (
                  <div 
                    key={`${message.id}-${index}`}
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'} w-full`}
                  >
                    <div className={`flex ${isOwn ? 'flex-row-reverse' : 'flex-row'} gap-2 max-w-[75%]`}>
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={message.sender.image || undefined} />
                        <AvatarFallback>
                          {message.sender.name?.charAt(0) || '?'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 max-w-full overflow-hidden">
                        <div className={`p-3 rounded-lg ${
                          isOwn 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="break-words whitespace-normal text-sm">{message.content}</p>
                        </div>
                        <p className={`text-xs text-muted-foreground mt-1 ${
                          isOwn ? 'text-right' : 'text-left'
                        }`}>
                          {formatTime(message.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            
            {/* Typing indicator */}
            {isReceiverTyping && (
              <div className="flex justify-start w-full">
                <div className="flex flex-row gap-2 max-w-[75%]">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-muted min-w-[60px]">
                    <div className="flex space-x-1 items-center">
                      <div className="h-2 w-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </ScrollArea>
      
      <form 
        onSubmit={handleSendMessage}
        className="border-t p-3 flex gap-2"
      >
        <Input
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          disabled={isLoading || isLoadingMessages}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={!newMessage.trim() || isLoading || isLoadingMessages}
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : null}
          Send
        </Button>
      </form>
    </div>
  );
} 