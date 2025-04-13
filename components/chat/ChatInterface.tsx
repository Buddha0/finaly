"use client";

import { getAssignmentMessages, sendAssignmentMessage } from "@/app/actions/chat-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { pusherClient } from "@/lib/pusher";
import { UploadButton } from "@/utils/uploadthing";
import { useUser } from "@clerk/nextjs";
import { FileIcon, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Message type based on schema
type Message = {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
  fileUrls?: string;
  isRead: boolean;
  sender: {
    id: string;
    name: string | null;
    image: string | null;
  };
};

// Parsed file type from fileUrls
type FileAttachment = {
  url: string;
  name: string;
  type: string;
};

interface ChatInterfaceProps {
  assignmentId: string;
  receiverId: string;
  title?: string;
  fullHeight?: boolean;
}

export default function ChatInterface({ 
  assignmentId, 
  receiverId,
  title = "Task Communication",
  fullHeight = false
}: ChatInterfaceProps) {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{url: string, name: string, type: string}[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  
  // Track processed message IDs to avoid duplicates
  const processedMessageIds = useRef(new Set<string>());
  
  // Load messages
  useEffect(() => {
    const loadMessages = async () => {
      if (!assignmentId) return;
      
      setIsLoadingMessages(true);
      
      try {
        const response = await getAssignmentMessages(assignmentId);
        
        if (response.success && response.data) {
          // Set messages and mark all as processed
          setMessages(response.data as unknown as Message[]);
          response.data.forEach((msg: any) => {
            processedMessageIds.current.add(msg.id);
          });
          setError(null);
        } else {
          setError(response.error || "Failed to load messages");
        }
      } catch (error) {
        console.error("Error loading messages:", error);
        setError("Failed to load messages. Please try again.");
      } finally {
        setIsLoadingMessages(false);
      }
    };
    
    loadMessages();
  }, [assignmentId]);
  
  // Subscribe to Pusher events
  useEffect(() => {
    if (!assignmentId || !user?.id) return;
    
    const channel = pusherClient.subscribe(`assignment-${assignmentId}`);
    
    // Handle new message
    const handleNewMessage = (message: Message) => {
      // Skip if already processed
      if (processedMessageIds.current.has(message.id)) return;
      
      // Mark message as processed
      processedMessageIds.current.add(message.id);
      
      // Add to messages
      setMessages((current) => [...current, message]);
    };
    
    // Bind event handlers
    channel.bind("new-message", handleNewMessage);
    
    // Clean up on unmount
    return () => {
      channel.unbind("new-message", handleNewMessage);
      pusherClient.unsubscribe(`assignment-${assignmentId}`);
    };
  }, [assignmentId, user?.id]);
  
  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Send message
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (isLoading) return;
    
    // Check if we have uploaded files or text message
    const hasFiles = uploadedFiles.length > 0;
    const hasTextMessage = newMessage.trim() !== "";
    
    // Only proceed if we have files or message
    if (!hasFiles && !hasTextMessage) return;
    
    setIsLoading(true); 
    
    try {
      // Send the message with files if we have them
      const content = hasTextMessage ? newMessage.trim() : "Sent attachments";
      
      // For file uploads
      let fileUrls;
      
      if (hasFiles) {
        // Log the uploaded files for debugging
        console.log("Sending files:", uploadedFiles);
        
        // Always store file objects as array for consistency
        fileUrls = JSON.stringify(uploadedFiles);
      }
      
      const response = await sendAssignmentMessage(
        content,
        assignmentId,
        receiverId,
        fileUrls // Send the JSON string of file objects
      );
      
      if (!response.success) {
        setError(response.error || "Failed to send message");
      } else {
        setNewMessage("");
        setUploadedFiles([]); // Clear the uploaded files after sending
        setError(null);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Parse file attachments from JSON string
  const getFileAttachments = (fileUrlsJson: string | undefined): FileAttachment[] => {
    if (!fileUrlsJson) return [];
    
    console.log("Raw fileUrls data:", fileUrlsJson);
    
    try {
      // Handle direct URL strings (not JSON)
      if (typeof fileUrlsJson === 'string' && (fileUrlsJson.startsWith('http') || fileUrlsJson.startsWith('/')) && !fileUrlsJson.includes('{')) {
        console.log("Handling direct URL string");
        return [{
          url: fileUrlsJson,
          name: fileUrlsJson.split('/').pop() || "Attachment",
          type: "application/octet-stream"
        }];
      }
      
      // Try to parse as JSON
      let parsed;
      try {
        parsed = JSON.parse(fileUrlsJson);
        console.log("Parsed JSON data:", parsed);
      } catch (err) {
        console.error("JSON parse error:", err);
        // If parsing fails and it looks like a URL, treat as direct URL
        if (typeof fileUrlsJson === 'string' && (fileUrlsJson.includes('http') || fileUrlsJson.includes('/'))) {
          return [{
            url: fileUrlsJson,
            name: fileUrlsJson.split('/').pop() || "Attachment",
            type: "application/octet-stream"
          }];
        }
        throw err; // Re-throw if it's not a URL
      }
      
      // If it's an array, process accordingly
      if (Array.isArray(parsed)) {
        console.log("Processing array of files, length:", parsed.length);
        // If array of objects with url/name/type properties
        if (parsed.length > 0 && typeof parsed[0] === 'object') {
          return parsed.map((file, index) => {
            const fileUrl = file.ufsUrl || file.url || '';
            const fileName = file.name || (fileUrl ? fileUrl.split('/').pop() : `File ${index + 1}`) || 'Attachment';
            
            console.log(`Processing file ${index}:`, { url: fileUrl, name: fileName });
            
            return {
              url: fileUrl,
              name: fileName,
              type: file.type || 'application/octet-stream'
            };
          }).filter(file => file.url); // Remove entries without URLs
        }
        
        // If array of strings (just URLs)
        if (parsed.length > 0 && typeof parsed[0] === 'string') {
          return parsed.map((url, index) => ({
            url,
            name: url.split('/').pop() || `File ${index + 1}`,
            type: 'application/octet-stream'
          }));
        }
      }
      
      // If single object with url property
      if (parsed && typeof parsed === 'object') {
        const url = parsed.ufsUrl || parsed.url;
        if (url) {
          console.log("Processing single object file:", { url });
          return [{
            url,
            name: parsed.name || url.split('/').pop() || 'Attachment',
            type: parsed.type || 'application/octet-stream'
          }];
        }
      }
      
      // Fallback - could not parse properly
      console.error("Could not parse file attachments:", fileUrlsJson);
      return [];
    } catch (e) {
      console.error("Error parsing file attachments:", e);
      return [];
    }
  };
  
  // Format time for display
  const formatTime = (date: Date): string => {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  // Format date for grouping messages
  const formatMessageDate = (date: Date): string => {
    const today = new Date();
    const messageDate = new Date(date);
    
    if (
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear()
    ) {
      return "Today";
    }
    
    // Yesterday
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (
      messageDate.getDate() === yesterday.getDate() &&
      messageDate.getMonth() === yesterday.getMonth() &&
      messageDate.getFullYear() === yesterday.getFullYear()
    ) {
      return "Yesterday";
    }
    
    // This week (within 7 days)
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 6);
    
    if (messageDate >= oneWeekAgo) {
      return messageDate.toLocaleDateString(undefined, { weekday: 'long' });
    }
    
    // Older messages
    return messageDate.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: messageDate.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
    });
  };
  
  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = formatMessageDate(new Date(message.createdAt));
    
    if (!groups[date]) {
      groups[date] = [];
    }
    
    groups[date].push(message);
    return groups;
  }, {} as Record<string, Message[]>);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-lg font-semibold px-4 py-3 border-b">
        {title}
      </div>
      
      <ScrollArea 
        ref={messagesContainerRef}
        className={`flex-grow px-4 py-2 ${fullHeight ? 'h-[calc(100vh-240px)]' : 'h-[500px]'}`}
      >
        {isLoadingMessages ? (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-center p-6">
            <p>No messages yet.</p>
            <p className="text-sm">Send a message to start the conversation.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(groupedMessages).map(([date, dateMessages]) => (
              <div key={date} className="space-y-4">
                <div className="relative flex items-center justify-center my-6">
                  <div className="absolute w-full border-t border-gray-200 dark:border-gray-800" />
                  <span className="relative bg-background px-2 text-xs text-muted-foreground">
                    {date}
                  </span>
                </div>
                
                {dateMessages.map((message) => {
                  const isUserMessage = message.senderId === user?.id;
                  const fileAttachments = getFileAttachments(message.fileUrls);
                  
                  return (
                    <div 
                      key={message.id}
                      className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="flex gap-2 max-w-[85%]">
                        {!isUserMessage && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={message.sender.image || undefined} />
                            <AvatarFallback>
                              {message.sender.name?.charAt(0) || 'U'}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div className="flex flex-col">
                          <div 
                            className={`
                              rounded-lg px-3 py-2 max-w-md break-words
                              ${isUserMessage 
                                ? 'bg-primary text-primary-foreground rounded-tr-none' 
                                : 'bg-muted rounded-tl-none'}
                            `}
                          >
                            {fileAttachments.length > 0 ? (
                              <div className="space-y-2">
                                {/* Display message content if not just a generic upload message */}
                                {message.content !== "Sent attachments" && message.content !== "Sent an attachment" && (
                                  <p className="mb-2">{message.content}</p>
                                )}

                                {/* File attachments */}
                                <div className="space-y-2">
                                  {fileAttachments.map((file, i) => {
                                    // Determine file type for icon and display
                                    const isImage = file.type?.startsWith('image/') || file.url.match(/\.(jpeg|jpg|gif|png|webp)$/i);
                                    const isPdf = file.type?.includes('pdf') || file.url.endsWith('.pdf');
                                    
                                    // Extract a better filename if needed
                                    const displayName = file.name || file.url.split('/').pop() || 'Attachment';
                                    
                                    return (
                                      <a 
                                        key={i}
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-black/5 p-2 rounded hover:bg-black/10 transition-colors"
                                        download={displayName}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          
                                          // Log what we're trying to download
                                          console.log("Downloading file:", { 
                                            url: file.url, 
                                            name: displayName 
                                          });
                                          
                                          // Force download using a direct fetch
                                          fetch(file.url)
                                            .then(response => {
                                              if (!response.ok) {
                                                throw new Error(`HTTP error! Status: ${response.status}`);
                                              }
                                              return response.blob();
                                            })
                                            .then(blob => {
                                              const url = window.URL.createObjectURL(blob);
                                              const a = document.createElement('a');
                                              a.style.display = 'none';
                                              a.href = url;
                                              a.download = displayName;
                                              document.body.appendChild(a);
                                              a.click();
                                              window.URL.revokeObjectURL(url);
                                              document.body.removeChild(a);
                                            })
                                            .catch(err => {
                                              console.error("Error downloading file:", err);
                                              // Fallback to direct link if fetch fails
                                              window.open(file.url, '_blank');
                                            });
                                        }}
                                      >
                                        {isImage ? (
                                          <div className="text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                              <circle cx="8.5" cy="8.5" r="1.5"/>
                                              <polyline points="21 15 16 10 5 21"/>
                                            </svg>
                                          </div>
                                        ) : isPdf ? (
                                          <div className="text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                              <polyline points="14 2 14 8 20 8"/>
                                              <path d="M9 15v-4M12 15v-2M15 15v-6"/>
                                            </svg>
                                          </div>
                                        ) : (
                                          <FileIcon className="h-4 w-4 flex-shrink-0 text-gray-500" />
                                        )}
                                        <span className="text-sm truncate">{displayName}</span>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              <p>{message.content}</p>
                            )}
                          </div>
                          
                          <span className={`text-xs text-muted-foreground mt-1 ${isUserMessage ? 'text-right' : ''}`}>
                            {formatTime(new Date(message.createdAt))}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </ScrollArea>
      
      {error && (
        <div className="p-2 text-destructive text-sm">
          {error}
        </div>
      )}
      
      <div className="border-t p-3">
        <form 
          onSubmit={(e) => handleSendMessage(e)}
          className="flex gap-2 flex-col"
        >
          {/* Display all uploaded files */}
          {uploadedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center px-2 py-1 bg-muted rounded-md">
                  <FileIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs truncate max-w-[100px]">{file.name}</span>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 ml-1" 
                    onClick={() => setUploadedFiles(files => files.filter((_, i) => i !== index))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              disabled={isLoading || isUploading}
              className="flex-grow"
            />
            
            <UploadButton
              endpoint="messageUploader"
              onClientUploadComplete={(res) => {
                if (res && res.length > 0) {
                  // Add all uploaded files to the state
                  const newFiles = res.map(file => ({
                    url: file.url || file.ufsUrl, // Try both properties for compatibility
                    name: file.name || (file.url || file.ufsUrl).split('/').pop() || 'File',
                    type: file.type || 'application/octet-stream'
                  }));
                  
                  // Log what we're adding to help debug
                  console.log("Files being added:", newFiles);
                  
                  setUploadedFiles(prev => [...prev, ...newFiles]);
                }
                setIsUploading(false);
              }}
              onUploadBegin={() => setIsUploading(true)}
              onUploadError={(error) => {
                console.error("Upload error:", error);
                setError("Failed to upload file");
                setIsUploading(false);
              }}
              className="upload-button bg-red-400 p-2 rounded-md"
            />
            
            <Button 
              type="submit" 
              size="icon"
              disabled={(uploadedFiles.length === 0 && !newMessage.trim()) || isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 