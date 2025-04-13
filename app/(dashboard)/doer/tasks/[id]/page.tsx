"use client"

import { createTaskSubmission, getDoerTaskDetails, updateTaskStatus } from "@/actions/utility/task-utility"
import { getUserId } from "@/actions/utility/user-utilit"
import ChatInterface from "@/components/chat/ChatInterface"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@/utils/uploadthing"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  FileText,
  Home,
  ListChecks,
  Loader2,
  MessageSquare,
  Paperclip,
  Search
} from "lucide-react"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"
import { toast } from "sonner"

const navItems = [
  {
    href: "/doer",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/doer/bids",
    label: "My Bids",
    icon: FileText,
  },
  {
    href: "/doer/active-tasks",
    label: "Active Tasks",
    icon: ListChecks,
  },
  {
    href: "/doer/available-tasks",
    label: "Available Tasks",
    icon: Search,
  },
  
]

interface TaskData {
  id: string
  title: string
  description: string
  category: string
  budget: number
  deadline: Date
  status: string
  attachments: any
  poster: {
    id: string
    name: string | null
    image: string | null
    rating: number | null
    memberSince: Date
  }
  messages: Array<{
    id: string
    content: string
    createdAt: Date
    isPoster: boolean
    sender: {
      id: string
      name: string | null
      image: string | null
    }
  }>
  submissions: Array<{
    id: string
    content: string
    status: string
    createdAt: Date
    attachments: any
  }>
  bid: {
    id: string
    amount: number
    timeframe: string
    message: string
    status: string
  } | null
}

export default function TaskDetail() {
  const params = useParams()
  const taskId = params.id as string
  const [activeTab, setActiveTab] = useState("details")
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<{url: string, name: string, type: string}[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [task, setTask] = useState<TaskData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [disputeReason, setDisputeReason] = useState("")
  const [disputeEvidence, setDisputeEvidence] = useState<{url: string, name: string, type: string}[]>([])
  const [isSubmittingDispute, setIsSubmittingDispute] = useState(false)

  // Fetch task details from the database
  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        // Get the current user's ID from auth
        let userId;
        try {
          userId = await getUserId();
        } catch (authError) {
          console.error("Auth error:", authError);
          setError("Authentication error. Please sign in again.");
          setIsLoading(false);
          return;
        }
        
        const response = await getDoerTaskDetails(taskId, userId)
        
        if (response.success && response.data) {
          setTask(response.data)
        } else {
          setError(response.error || "Failed to load task")
        }
      } catch (err) {
        console.error("Error fetching task details:", err)
        setError("An unexpected error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchTaskDetails()
  }, [taskId])

  const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-500"
      case "in_progress":
      case "in-progress":
        return "bg-yellow-500"
      case "under_review":
      case "pending-review":
        return "bg-purple-500"
      case "completed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "open":
        return "Open"
      case "in_progress":
      case "in-progress":
        return "In Progress"
      case "under_review":
      case "pending-review":
        return "Pending Review"
      case "completed":
        return "Completed"
      default:
        return status
    }
  }

  const handleSubmitTask = async () => {
    if (!task) return;
    
    try {
      setIsSubmitting(true);
      
      // Get the current user's ID from auth
      const userId = await getUserId();
      
      // Call the submission action
      const result = await createTaskSubmission(
        task.id,
        userId,
        submissionMessage,
        uploadedFiles // Pass the uploaded files
      );
      
      if (result.success) {
        // Update the local task state with the new submission
        setTask(prevTask => {
          if (!prevTask) return null;
          
          // Add the new submission to the list
          const newSubmission = {
            id: result.data.id,
            content: submissionMessage,
            status: "pending",
            createdAt: new Date(),
            attachments: uploadedFiles
          };
          
          return {
            ...prevTask,
            status: prevTask.status === "in-progress" ? "under_review" : prevTask.status,
            submissions: [newSubmission, ...prevTask.submissions]
          };
        });
        
        // Reset form
        setSubmissionMessage("");
        setUploadedFiles([]);
        
        // Different messages based on whether this is the first submission or an additional one
        if (task.submissions.length === 0) {
          toast.success("Work submitted successfully! Your task is now under review.");
        } else {
          toast.success("Additional submission added successfully.");
        }
      } else {
        toast.error(result.error || "Failed to submit work");
      }
    } catch (error) {
      console.error("Error submitting work:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };



  const handleStatusUpdate = async (newStatus: string) => {
    if (!task) return;
    
    try {
      setIsUpdatingStatus(true);
      // Get the current user's ID from auth
      const userId = await getUserId();
      
      const result = await updateTaskStatus(task.id, userId, newStatus);
      
      if (result.success) {
        // Update the local task object with the new status
        setTask(prevTask => {
          if (!prevTask) return null;
          return {
            ...prevTask,
            status: newStatus.toLowerCase()
          };
        });
        toast.success(result.message || `Task status updated to ${getStatusLabel(newStatus)}`);
      } else {
        toast.error(result.error || "Failed to update task status");
      }
    } catch (error) {
      console.error("Error updating task status:", error);
      toast.error("An unexpected error occurred while updating status");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleSubmitDispute = async () => {
    if (!task || !disputeReason.trim()) {
      toast.error("Please provide a reason for the dispute.");
      return;
    }

    try {
      setIsSubmittingDispute(true);
      
      // Get the current user's ID from auth
      const userId = await getUserId();
      
      // Call the API to create a dispute
      const response = await fetch('/api/disputes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assignmentId: task.id,
          initiatorId: userId,
          reason: disputeReason,
          evidence: disputeEvidence,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Dispute submitted successfully.");
        setDisputeReason("");
        setDisputeEvidence([]);
        setActiveTab("details");
      } else {
        toast.error(result.error || "Failed to submit dispute.");
      }
    } catch (error) {
      console.error("Error submitting dispute:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmittingDispute(false);
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout navItems={navItems} userRole="doer" userName="User">
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-xl">Loading task details...</p>
        </div>
      </DashboardLayout>
    )
  }

  if (error || !task) {
    return (
      <DashboardLayout navItems={navItems} userRole="doer" userName="User">
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <Alert variant="destructive" className="max-w-lg">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error || "Task not found"} <Link href="/doer/active-tasks" className="underline">Return to tasks</Link>
            </AlertDescription>
          </Alert>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout navItems={navItems} userRole="doer" userName="User">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href={task.status === "open" ? "/doer/available-tasks" : "/doer/active-tasks"}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{task.title}</h1>
          <Badge className={`${getStatusColor(task.status)} text-white ml-2`}>{getStatusLabel(task.status)}</Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-3 w-full">
          <div className="md:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="dispute">Raise Dispute</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Description</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-full">
                    <div dangerouslySetInnerHTML={{ __html: task.description }} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attachments" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Attachments</CardTitle>
                    <CardDescription>
                      Files shared by the task poster
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {task.attachments && task.attachments.length > 0 ? (
                      <div className="space-y-2">
                        {task.attachments.map((attachment: any, index: number) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 border rounded-md"
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-blue-500" />
                              <span>{attachment.name}</span>
                            </div>
                            <Button size="sm" variant="ghost" asChild>
                              <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                                <Download className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No attachments available</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>
                      {task.bid?.status === "accepted" || task.status !== "open" ? "Communicate with the task poster" : "You can message after your bid is accepted"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChatInterface
                      assignmentId={task.id}
                      receiverId={task.poster.id}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="submissions" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Work</CardTitle>
                    <CardDescription>Submit your completed work for review</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Add a message to the poster about your submission..."
                        rows={4}
                        value={submissionMessage}
                        onChange={(e) => setSubmissionMessage(e.target.value)}
                      />
                      <div className="bg-muted/50 p-4 rounded-md">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Paperclip className="h-4 w-4" />
                          <span>Attach files</span>
                        </div>
                        
                        {/* Display uploaded files */}
                        {uploadedFiles.length > 0 && (
                          <div className="mb-3 space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-background rounded border">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-blue-500" />
                                  <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => {
                                    setUploadedFiles(files => files.filter((_, i) => i !== index));
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                  </svg>
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <UploadButton
                          endpoint="fileSubmissionUploader"
                          onClientUploadComplete={(res) => {
                            if (res && res.length > 0) {
                              const newFiles = res.map(file => ({
                                url: file.url || file.ufsUrl, // Support both properties
                                name: file.name || (file.url || file.ufsUrl).split('/').pop() || 'File',
                                type: file.type || 'application/octet-stream'
                              }));
                              setUploadedFiles(prev => [...prev, ...newFiles]);
                            }
                            setIsUploading(false);
                            toast.success("Files uploaded successfully");
                          }}
                          onUploadBegin={() => {
                            setIsUploading(true);
                          }}
                          onUploadError={(error) => {
                            console.error("Upload error:", error);
                            setIsUploading(false);
                            toast.error("Failed to upload file");
                          }}
                          className="ut-button:w-full ut-button:flex ut-button:items-center ut-button:justify-center ut-button:gap-2 ut-button:bg-background"
                        />
                      </div>
                      <Button 
                        onClick={handleSubmitTask} 
                        className="w-full"
                        disabled={isSubmitting || isUploading || (!submissionMessage.trim() && uploadedFiles.length === 0)}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            {task.submissions.length > 0 ? "Submit Updated Work" : "Submit for Review"}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Show submission history */}
                    {task.submissions.length > 0 && (
                      <>
                        <Separator className="my-6" />
                        <h3 className="text-lg font-semibold mb-4">Submission History</h3>
                        <div className="space-y-4">
                          {task.submissions.map((submission) => (
                            <div key={submission.id} className="p-4 border rounded-lg">
                              <div className="flex justify-between mb-2">
                                <p className="font-semibold">Submission on {formatDate(submission.createdAt)}</p>
                              </div>
                              <p className="mb-2">{submission.content}</p>
                              {submission.attachments && submission.attachments.length > 0 && (
                                <div className="mt-2">
                                  <p className="font-semibold mb-1">Attachments:</p>
                                  <div className="space-y-1">
                                    {submission.attachments.map((attachment: any, index: number) => (
                                      <div key={index} className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-blue-500" />
                                        <a
                                          href={attachment.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-500 hover:underline"
                                        >
                                          {attachment.name}
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dispute">
                <Card>
                  <CardHeader>
                    <CardTitle>Raise a Dispute</CardTitle>
                    <CardDescription>
                      If you have an issue with this task or payment, please provide details below.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="dispute-reason" className="text-sm font-medium mb-1 block">
                          Reason for Dispute
                        </label>
                        <Textarea
                          id="dispute-reason"
                          placeholder="Describe the issue in detail..."
                          value={disputeReason}
                          onChange={(e) => setDisputeReason(e.target.value)}
                          rows={5}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Supporting Evidence (Optional)
                        </label>
                        <div className="flex items-center gap-2 mb-2">
                          <UploadButton
                            endpoint="evidence"
                            className="bg-red-500 px-4 rounded-md"
                            onClientUploadComplete={(res) => {
                              const newFiles = res.map((file) => ({
                                url: file.url,
                                name: file.name,
                                type: file.type || 'unknown'
                              }));
                              setDisputeEvidence([...disputeEvidence, ...newFiles]);
                              toast.success(`Uploaded ${res.length} file(s) successfully!`);
                            }}
                            onUploadError={(error: Error) => {
                              toast.error(`Error uploading file: ${error.message}`);
                            }}
                            onUploadBegin={() => {
                              toast.info("Upload started...");
                            }}
                            config={{ mode: "auto" }}
                          />
                        </div>
                        
                        {disputeEvidence.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                            <div className="space-y-2">
                              {disputeEvidence.map((file, index) => (
                                <div key={index} className="flex items-center gap-2 p-2 border rounded">
                                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm truncate">{file.name}</span>
                                  <a
                                    href={file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto text-sm text-blue-500 hover:underline"
                                  >
                                    View
                                  </a>
                                  <button
                                    onClick={() => {
                                      setDisputeEvidence(disputeEvidence.filter((_, i) => i !== index));
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                    type="button"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M18 6L6 18"></path>
                                      <path d="M6 6L18 18"></path>
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setDisputeReason("");
                        setDisputeEvidence([]);
                        setActiveTab("details");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmitDispute}
                      disabled={isSubmittingDispute || !disputeReason.trim()}
                    >
                      {isSubmittingDispute ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Dispute"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Task Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-muted-foreground">Budget</p>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                    <span className="font-medium">${task.budget.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-muted-foreground">Due Date</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                    <span>{formatDate(task.deadline)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-muted-foreground">Category</p>
                  <Badge variant="outline">{task.category}</Badge>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium mb-2">Client</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={task.poster.image || undefined} />
                      <AvatarFallback>{task.poster.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{task.poster.name || "Anonymous"}</p>
                      <p className="text-xs text-muted-foreground">
                        Member since {new Date(task.poster.memberSince).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 flex-col">
                {task.bid && task.bid.status === "accepted" && (
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("messages")}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Client
                  </Button>
                )}
                
                {/* Status update buttons */}
                {task.status === "assigned" && (
                  <Button 
                    className="w-full" 
                    onClick={() => handleStatusUpdate("IN_PROGRESS")}
                    disabled={isUpdatingStatus}
                  >
                    {isUpdatingStatus ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Clock className="mr-2 h-4 w-4" />
                    )}
                    Start Working
                  </Button>
                )}
                
                {(task.status === "in_progress" || task.status === "in-progress") && (
                  <Button className="w-full" onClick={() => setActiveTab("submissions")}>
                    Submit Work
                  </Button>
                )}
              </CardFooter>
            </Card>

            {task.bid && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Bid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-muted-foreground">Bid Amount</p>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                      <span className="font-medium">${task.bid.amount.toFixed(2)}</span>
                    </div>
                  </div>
                  {task.bid.timeframe && (
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-muted-foreground">Timeframe</p>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{task.bid.timeframe}</span>
                      </div>
                    </div>
                  )}
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-1">Bid Message</p>
                    <p className="text-sm">{task.bid.message}</p>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge
                      className={
                        task.bid.status === "accepted"
                          ? "bg-green-500"
                          : task.bid.status === "rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }
                    >
                      {task.bid.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

