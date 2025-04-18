"use client"

import { deleteTask, getTaskDetails, rejectBid } from "@/actions/utility/task-utility"
import ChatInterface from "@/components/chat/ChatInterface"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@clerk/nextjs"
import { Calendar, DollarSign, Download, FileText, FilePlus, Home, ListChecks, Loader2, MessageSquare, Pencil, Star, Trash2, ShieldCheck, Image, Video, Music, FileSpreadsheet, Archive, CreditCard, CheckCircle2, Paperclip, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { UploadButton } from "@/utils/uploadthing"
import { Textarea } from "@/components/ui/textarea"
import { PaymentModal } from "@/components/payment-modal"
import { DisputeResponseForm } from "@/components/dispute-response-form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const navItems = [
  {
    href: "/poster",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/poster/tasks",
    label: "My Tasks",
    icon: ListChecks,
  },
  {
    href: "/poster/create-task",
    label: "Create Task",
    icon: FilePlus,
  },
  {
    href: "/poster/verification",
    label: "Verification",
    icon: ShieldCheck,
  }
]

interface Message {
  id: string
  content: string
  createdAt: Date
  sender: {
    id: string
    name: string | null
    image: string | null
  }
}

interface DoerInfo {
  id: string
  name: string | null
  image: string | null
  rating: number | null
  bio: string | null
}

interface Submission {
  id: string
  content: string
  status: string
  createdAt: Date
  user: {
    id: string
    name: string | null
    image: string | null
    rating: number | null
  }
  attachments?: Array<{ url: string; name: string }> | null
}

interface Bid {
  id: string
  content: string
  bidAmount: number
  status: string
  createdAt: Date
  user: {
    id: string
    name: string | null
    image: string | null
    rating: number | null
  }
}

interface TaskDetails {
  id: string
  title: string
  description: string
  category: string
  budget: number
  deadline: Date
  status: string
  attachments: Array<{ url: string; name: string }> | null
  doerInfo: DoerInfo | null
  messages: Message[]
  submissions: Submission[]
  bids: Bid[]
  payment?: {
    id: string
    status: 'PENDING' | 'COMPLETED' | 'REFUNDED' | 'DISPUTED' | 'RELEASED'
    amount: number
    createdAt: Date
  } | null
  disputes?: Array<{
    id: string
    reason: string
    status: string
    createdAt: Date
    initiatorId: string
    hasResponse: boolean
    response?: string
  }>
}

export default function TaskDetails() {
  const params = useParams()
  const router = useRouter()
  const { user } = useUser()
  const [task, setTask] = useState<TaskDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [processingBid, setProcessingBid] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("details")
  const [disputeReason, setDisputeReason] = useState("")
  const [disputeEvidence, setDisputeEvidence] = useState<{url: string, name: string, type: string}[]>([])
  const [isSubmittingDispute, setIsSubmittingDispute] = useState(false)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [selectedBidId, setSelectedBidId] = useState<string | null>(null)
  const [showReleaseConfirmation, setShowReleaseConfirmation] = useState(false)
  const [isReleasingPayment, setIsReleasingPayment] = useState(false)

  useEffect(() => {
    async function loadTaskDetails() {
      if (!user?.id || !params.id) return

      try {
        const result = await getTaskDetails(params.id as string, user.id)
        if (result.success && result.data) {
          const transformedTask: TaskDetails = {
            id: result.data.id,
            title: result.data.title,
            description: result.data.description,
            category: result.data.category,
            budget: result.data.budget,
            deadline: result.data.deadline,
            status: result.data.status,
            attachments: result.data.attachments as Array<{ url: string; name: string }> | null,
            doerInfo: result.data.doerInfo,
            messages: result.data.messages,
            submissions: result.data.submissions,
            bids: result.data.bids,
            payment: result.data.payment,
            disputes: (result.data as any).disputes
          }
          setTask(transformedTask)
          
          // If task is no longer OPEN and we're on bids tab, switch to details
          if (transformedTask.status !== "OPEN" && activeTab === "bids") {
            setActiveTab("details");
          }
        } else {
          toast.error(result.error || "Failed to load task details")
          router.push("/poster/tasks")
        }
      } catch (error) {
        console.error("Error loading task details:", error)
        toast.error("Failed to load task details")
        router.push("/poster/tasks")
      } finally {
        setLoading(false)
      }
    }

    loadTaskDetails()
  }, [user?.id, params.id, router, activeTab])

  const handleAcceptBid = (bidId: string) => {
    setSelectedBidId(bidId);
    setPaymentModalOpen(true);
  };

  const handleRejectBid = async (bidId: string) => {
    if (!user?.id) return;

    if (!confirm("Are you sure you want to reject this bid?")) {
      return;
    }

    setProcessingBid(bidId);
    try {
      const result = await rejectBid(bidId, user.id);

      if (result.success) {
        toast.success(result.message || "Bid rejected successfully");
        // Refresh the page to show updated bids
        setTimeout(() => {
          router.refresh();
          window.location.reload();
        }, 1000);
      } else {
        toast.error(result.error || "Failed to reject bid");
      }
    } catch (error) {
      console.error("Error rejecting bid:", error);
      toast.error("An error occurred while rejecting this bid");
    } finally {
      setProcessingBid(null);
    }
  };

  const handleSubmitDispute = async () => {
    if (!user?.id || !task || !disputeReason.trim()) {
      toast.error("Please provide a reason for the dispute.");
      return;
    }

    try {
      setIsSubmittingDispute(true);
      
      // Call the API to create a dispute
      const response = await fetch('/api/disputes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assignmentId: task.id,
          initiatorId: user.id,
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

  // Check if there's an active dispute that the poster can respond to
  const activeDispute = task?.disputes?.find(d => d.status === "OPEN");
  const canRespondToDispute = activeDispute && user?.id && activeDispute.initiatorId !== user.id && !activeDispute.hasResponse;

  // Add the function to handle task deletion
  const handleDeleteTask = async () => {
    if (!user?.id || !task) return;
    
    if (!confirm("Are you sure you want to delete this task? This action cannot be undone.")) {
      return;
    }
    
    try {
      const result = await deleteTask(task.id, user.id);
      
      if (result.success) {
        toast.success("Task deleted successfully");
        router.push("/poster/tasks");
      } else {
        toast.error(result.error || "Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("An error occurred while deleting the task");
    }
  };

  const handlePaymentRelease = async () => {
    if (!task || !task.payment) return;
    
    try {
      setIsReleasingPayment(true);
      
      const response = await fetch('/api/payments/release', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId: task.id,
          paymentId: task.payment.id,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Payment released successfully!");
        router.refresh();
        window.location.reload();
      } else {
        toast.error(data.error || "Failed to release payment");
      }
    } catch (error) {
      console.error("Error releasing payment:", error);
      toast.error("An error occurred while releasing payment");
    } finally {
      setIsReleasingPayment(false);
      setShowReleaseConfirmation(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout navItems={navItems} userRole="poster" userName={user?.fullName || "User"}>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-lg text-muted-foreground">Loading task details...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!task) {
    return (
      <DashboardLayout navItems={navItems} userRole="poster" userName={user?.fullName || "User"}>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Task Not Found</h2>
            <p className="text-muted-foreground mb-6">The task you're looking for doesn't exist or you don't have permission to view it.</p>
            <Button asChild>
              <Link href="/poster/tasks">Return to Tasks</Link>
            </Button>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  const statusColors: Record<string, string> = {
    OPEN: "bg-blue-500",
    ASSIGNED: "bg-indigo-500",
    IN_PROGRESS: "bg-yellow-500",
    COMPLETED: "bg-green-500",
    UNDER_REVIEW: "bg-purple-500",
  }

  const statusLabels: Record<string, string> = {
    OPEN: "Open",
    ASSIGNED: "Assigned",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    UNDER_REVIEW: "Under Review",
  }

  return (
    <DashboardLayout navItems={navItems} userRole="poster" userName={user?.fullName || "User"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="icon" className="h-8 w-8">
              <Link href="/poster/tasks">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                  <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Link>
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">{task.title}</h1>
            <Badge variant="outline" className={task.status === "COMPLETED" ? "bg-green-100 text-green-800" : task.status === "IN_PROGRESS" ? "bg-blue-100 text-blue-800" : "bg-gray-100"}>
              {task.status === "OPEN" ? "Open" :
               task.status === "ASSIGNED" ? "Assigned" :
               task.status === "IN_PROGRESS" ? "In Progress" :
               task.status === "UNDER_REVIEW" ? "Under Review" :
               task.status === "COMPLETED" ? "Completed" :
               task.status === "IN_DISPUTE" ? "In Dispute" :
               task.status === "CANCELLED" ? "Cancelled" : task.status}
            </Badge>
          </div>
          
          {/* Add edit and delete buttons when task is OPEN */}
          {task.status === "OPEN" && (
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/poster/create-task?edit=${task.id}`}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Task
                </Link>
              </Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleDeleteTask}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Task
              </Button>
            </div>
          )}
        </div>

        {/* Add alert for active disputes */}
        {activeDispute && (
          <Alert variant={activeDispute.initiatorId === user?.id ? "default" : "destructive"} className="my-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Task In Dispute</AlertTitle>
            <AlertDescription>
              {activeDispute.initiatorId === user?.id 
                ? "You have raised a dispute for this task. Waiting for admin review."
                : canRespondToDispute
                  ? "The other party has raised a dispute. Please respond below."
                  : activeDispute.hasResponse
                    ? "You have responded to this dispute. Waiting for admin review."
                    : "This task is in dispute. Contact admin for more information."
              }
            </AlertDescription>
          </Alert>
        )}
        
        {/* Add prominent payment release notification at the top when task is under review */}
        {task.status === "UNDER_REVIEW" && task.payment && task.submissions && task.submissions.some(sub => sub.status === "pending") && (
          <Alert className="bg-green-50 border-green-200 text-green-800 my-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800 font-semibold text-lg">New Submission Ready for Review</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              <p>The doer has completed and submitted their work for your review.</p>
              <div className="mt-2">
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setShowReleaseConfirmation(true)}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Approve Work & Release Payment
                </Button>
                <Button 
                  variant="outline" 
                  className="ml-2"
                  onClick={() => setActiveTab("submissions")}
                >
                  Review Submission First
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* If the user can respond to a dispute, show the response form */}
            {canRespondToDispute && (
              <DisputeResponseForm 
                disputeId={activeDispute.id} 
                assignmentTitle={task.title} 
              />
            )}
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${task.status === "OPEN" ? 6 : 5}, minmax(0, 1fr))` }}>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="attachments">Attachments</TabsTrigger>
                {task.status === "OPEN" && <TabsTrigger value="bids">Bids</TabsTrigger>}
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="dispute">Raise Dispute</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Description</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="font-medium mb-1">Category</h3>
                        <p className="text-sm text-muted-foreground">{task.category}</p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Budget</h3>
                        <p className="text-sm text-muted-foreground">${task.budget.toFixed(2)}</p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Deadline</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(task.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attachments" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Attachments</CardTitle>
                    <CardDescription>Files attached to this task</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {task.attachments && task.attachments.length > 0 ? (
                      <div className="space-y-2">
                        {task.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 border rounded-md"
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-blue-500" />
                              <span>{file.name}</span>
                            </div>
                            <Button size="sm" variant="ghost" asChild>
                              <a href={file.url} target="_blank" rel="noopener noreferrer">
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

              {task.status === "OPEN" && (
                <TabsContent value="bids" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Bids {task.bids.length > 0 && `(${task.bids.length})`}</CardTitle>
                      <CardDescription>Review and accept bids from doers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {task.bids && task.bids.length > 0 ? (
                        task.bids.map((bid) => (
                          <div key={bid.id} className="border rounded-lg p-4 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={bid.user.image || undefined} />
                                  <AvatarFallback>
                                    {bid.user.name?.[0] || "D"}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-medium">{bid.user.name}</h3>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>{bid.user.rating?.toFixed(1) || "No rating"}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 bg-muted/30 p-3 rounded-md">
                              <div>
                                <h4 className="text-xs font-medium text-muted-foreground mb-1">Your Original Budget</h4>
                                <p className="text-base font-medium">${task.budget.toFixed(2)}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-medium text-muted-foreground mb-1">Doer Proposed Bid</h4>
                                <p className={`text-base font-medium ${bid.bidAmount <= task.budget ? "text-green-600" : "text-red-600"}`}>
                                  ${bid.bidAmount.toFixed(2)}
                                  {bid.bidAmount <= task.budget ?
                                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Within budget</span> :
                                    <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Above budget</span>}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-xs font-medium text-muted-foreground mb-1">Bid Description</h4>
                              <p className="text-sm">{bid.content}</p>
                            </div>

                            <div className="flex items-center justify-between">
                              <p className="text-xs text-muted-foreground">
                                Submitted {new Date(bid.createdAt).toLocaleString()}
                              </p>
                              <div className="flex gap-2">
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleRejectBid(bid.id)}
                                  disabled={processingBid === bid.id}
                                >
                                  {processingBid === bid.id ? (
                                    <>
                                      <Loader2 className="h-3 w-3 animate-spin mr-1" />
                                      Processing...
                                    </>
                                  ) : "Reject Bid"}
                                </Button>
                                <Button
                                  variant="default"
                                  size="sm"
                                  onClick={() => handleAcceptBid(bid.id)}
                                  disabled={processingBid === bid.id}
                                >
                                  {processingBid === bid.id ? (
                                    <>
                                      <Loader2 className="h-3 w-3 animate-spin mr-1" />
                                      Processing...
                                    </>
                                  ) : "Accept Bid"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-center py-8">No bids received yet</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              <TabsContent value="messages" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Communication with your doer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {task.doerInfo ? (
                      <ChatInterface
                        assignmentId={task.id}
                        receiverId={task.doerInfo.id}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Messages Not Available Yet</h3>
                        <p className="text-muted-foreground max-w-md">
                          You will be able to communicate with the doer once you've accepted a bid.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="submissions" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Submissions</CardTitle>
                    <CardDescription>Work submitted by your doer</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {task.doerInfo ? (
                      task.submissions.length > 0 ? (
                        task.submissions.map((submission) => (
                          <div key={submission.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between mb-2">
                              <p className="font-semibold">Submission on {new Date(submission.createdAt).toLocaleDateString()}</p>
                            </div>
                            <p className="mb-2">{submission.content}</p>
                            {/* Display submission attachments if any */}
                            {submission.attachments && submission.attachments.length > 0 && (
                              <div className="mt-4">
                                <p className="font-medium mb-2">Attachments:</p>
                                <div className="space-y-2">
                                  {submission.attachments.map((attachment: any, index: number) => {
                                    if (!attachment || !attachment.url) {
                                      console.error("Invalid attachment:", attachment);
                                      return null;
                                    }
                                    
                                    const fileUrl = attachment.url;
                                    const fileName = attachment.name || fileUrl.split('/').pop() || `File ${index+1}`;
                                    const fileType = attachment.type || 'application/octet-stream';
                                    
                                    // Determine the file icon based on type or extension
                                    let Icon = FileText;
                                    
                                    if (fileType.startsWith('image/') || fileName.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                                      Icon = Image;
                                    } else if (fileType.startsWith('video/') || fileName.match(/\.(mp4|avi|mov|wmv)$/i)) {
                                      Icon = Video;
                                    } else if (fileType.startsWith('audio/') || fileName.match(/\.(mp3|wav|ogg)$/i)) {
                                      Icon = Music;
                                    } else if (fileType === 'application/pdf' || fileName.match(/\.pdf$/i)) {
                                      Icon = FileText;
                                    } else if (fileName.match(/\.(doc|docx)$/i)) {
                                      Icon = FileText;
                                    } else if (fileName.match(/\.(xls|xlsx)$/i)) {
                                      Icon = FileSpreadsheet;
                                    } else if (fileName.match(/\.(zip|rar|7z)$/i)) {
                                      Icon = Archive;
                                    }
                                    
                                    return (
                                      <div
                                        key={`${submission.id}-${index}-${fileUrl}`}
                                        className="flex items-center justify-between p-3 rounded-md border border-gray-200 bg-gray-50"
                                      >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                          <Icon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                                          <span className="font-medium text-gray-700">{fileName}</span>
                                        </div>
                                        <a
                                          href={fileUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-4 flex items-center gap-1 px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                        >
                                          <Download className="h-4 w-4" />
                                          <span className="text-sm">Download</span>
                                        </a>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-center py-4">No submissions received yet</p>
                      )
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <ListChecks className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Submissions Not Available Yet</h3>
                        <p className="text-muted-foreground max-w-md">
                          You will be able to view submissions once you've accepted a bid and the doer starts working.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dispute">
                <Card>
                  <CardHeader>
                    <CardTitle>Raise a Dispute</CardTitle>
                    <CardDescription>
                      If you have an issue with this task or doer, please provide details below.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {task.doerInfo ? (
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
                            className = "bg-red-500"
                              endpoint="evidence"
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
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Disputes Not Available Yet</h3>
                        <p className="text-muted-foreground max-w-md">
                          You will be able to raise disputes once you've accepted a bid and the task is in progress.
                        </p>
                      </div>
                    )}
                  </CardContent>
                  {task.doerInfo && (
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
                  )}
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            {/* Move Payment Release card to the top of sidebar when task is under review */}
            {task.status === "UNDER_REVIEW" && task.payment && task.submissions && task.submissions.some(sub => sub.status === "pending") && (
              <Card className="border-green-300 border-2 bg-green-50 shadow-md">
                <CardHeader className="pb-2 bg-green-100">
                  <CardTitle className="flex items-center text-green-800">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Release
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700 mb-4 font-medium">
                    The doer has submitted their work for your review. Once you approve, the payment will be released from escrow.
                  </p>
                  <div className="space-y-3 bg-white rounded-md p-3 border border-green-200 mb-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-green-800">Payment Amount</p>
                      <p className="font-medium text-green-900">${task.payment.amount?.toFixed(2) || task.budget.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-green-800">Status</p>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">In Escrow</Badge>
                    </div>
                  </div>
                  <div className="text-sm text-green-700 mb-4">
                    <p className="font-medium mb-2">What happens when you release payment:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The payment will be transferred to the doer</li>
                      <li>The task will be marked as completed</li>
                      <li>This action cannot be undone</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setShowReleaseConfirmation(true)}
                  >
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Approve Work & Release Payment
                  </Button>
                </CardFooter>
              </Card>
            )}
            
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
                    <span>{new Date(task.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-muted-foreground">Category</p>
                  <Badge variant="outline">{task.category}</Badge>
                </div>
              </CardContent>
            </Card>

            {task.doerInfo && (
              <Card>
                <CardHeader>
                  <CardTitle>Doer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={task.doerInfo.image || undefined} />
                      <AvatarFallback>{task.doerInfo.name?.charAt(0) || 'D'}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{task.doerInfo.name}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{task.doerInfo.rating?.toFixed(1) || "No rating"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm border p-3 rounded-md bg-muted/20">
                    <div>
                      <p className="text-muted-foreground">Tasks Completed</p>
                      <p className="font-medium">12</p> {/* This would come from the database in a real app */}
                    </div>
                    <div>
                      <p className="text-muted-foreground">Response Rate</p>
                      <p className="font-medium">95%</p> {/* This would come from the database in a real app */}
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg. Rating</p>
                      <p className="font-medium">{task.doerInfo.rating ? `${task.doerInfo.rating.toFixed(1)}/5` : "No rating"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Active</p>
                      <p className="font-medium">Today</p> {/* This would come from the database in a real app */}
                    </div>
                  </div>

                  {task.doerInfo.bio && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium mb-2">Bio</h3>
                      <p className="text-sm text-muted-foreground">{task.doerInfo.bio}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("messages")}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Doer
                  </Button>
                </CardFooter>
              </Card>
            )}

            {task.status === "OPEN" && task.bids && task.bids.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Bids Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Bids</span>
                      <span className="font-medium">{task.bids.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Average Bid</span>
                      <span className="font-medium">
                        ${(task.bids.reduce((sum, bid) => sum + bid.bidAmount, 0) / task.bids.length).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Lowest Bid</span>
                      <span className="font-medium text-green-600">
                        ${Math.min(...task.bids.map(bid => bid.bidAmount)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("bids")}>
                    View All Bids
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      {task && selectedBidId && (
        <PaymentModal
          open={paymentModalOpen}
          onOpenChange={setPaymentModalOpen}
          taskId={task.id}
          bidId={selectedBidId}
          bidAmount={task.bids.find(bid => bid.id === selectedBidId)?.bidAmount || 0}
        />
      )}
      
      {/* Payment Release Confirmation Modal */}
      {task && task.payment && showReleaseConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden shadow-xl">
            <div className="bg-green-50 px-6 py-4 border-b border-green-100">
              <h3 className="text-lg font-semibold text-green-800 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                Confirm Payment Release
              </h3>
            </div>
            <div className="px-6 py-4">
              <p className="mb-4">
                Are you sure you want to release the payment of <span className="font-semibold">${task.payment.amount?.toFixed(2) || task.budget.toFixed(2)}</span> to the doer?
              </p>
              <div className="bg-amber-50 p-3 rounded-md border border-amber-100 mb-4">
                <p className="text-amber-800 text-sm flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-amber-600" />
                  This action cannot be undone. The funds will be transferred immediately and the task will be marked as completed.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 flex justify-end gap-3 border-t">
              <Button 
                variant="outline" 
                onClick={() => setShowReleaseConfirmation(false)}
                disabled={isReleasingPayment}
              >
                Cancel
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={handlePaymentRelease}
                disabled={isReleasingPayment}
              >
                {isReleasingPayment ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Confirm Release"
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}


