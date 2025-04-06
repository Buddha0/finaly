"use client"

import { useEffect, useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FilePlus, Home, ListChecks, Loader2, MessageSquare, Star, Pencil, Trash2 } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { getTaskDetails, deleteTask, acceptBid, rejectBid } from "@/actions/utility/task-utility"
import { toast } from "sonner"
import Link from "next/link"
import PaymentStatus from "@/app/(dashboard)/components/PaymentStatus"
import ReleasePaymentButton from "@/app/(dashboard)/components/ReleasePaymentButton"
import ChatInterface from "@/components/chat/ChatInterface"

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
  progress: number
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
    stripePaymentId: string | null
  } | null
}

export default function TaskDetails() {
  const params = useParams()
  const router = useRouter()
  const { user } = useUser()
  const [task, setTask] = useState<TaskDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [newMessage, setNewMessage] = useState("")
  const [sendingMessage, setSendingMessage] = useState(false)
  const [processingBid, setProcessingBid] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
            progress: result.data.progress,
            attachments: result.data.attachments as Array<{ url: string; name: string }> | null,
            doerInfo: result.data.doerInfo,
            messages: result.data.messages,
            submissions: result.data.submissions,
            bids: result.data.bids,
            payment: result.data.payment
          }
          setTask(transformedTask)
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
  }, [user?.id, params.id, router])

  const handleAcceptBid = async (bidId: string) => {
    if (!user?.id || !task) return;
    
    if (!confirm("Are you sure you want to accept this bid? This will require immediate payment and assign the task to this doer.")) {
      return;
    }
    
    setProcessingBid(bidId);
    try {
      // Call our payment API instead of directly accepting the bid
      const response = await fetch('/api/payments/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId: task.id,
          bidId: bidId,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        toast.error(data.error || "Failed to process payment");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("An error occurred while processing payment");
    } finally {
      setProcessingBid(null);
    }
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

  const handleMessageDoer = () => {
    // Scroll to the messages section
    const messagesCard = document.getElementById('messages-section');
    if (messagesCard) {
      messagesCard.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <DashboardLayout navItems={navItems} userRole="poster" userName={user?.fullName || ""}>
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Loading task details...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!task) {
    return null
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
    <DashboardLayout navItems={navItems} userRole="poster" userName={user?.fullName || ""}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{task.title}</h1>
          <div className="flex items-center gap-2">
            <Badge className={`${statusColors[task.status]} text-white`}>
              {statusLabels[task.status]}
            </Badge>
            {task.status === "OPEN" && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/poster/create-task?edit=${task.id}`}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                    if (!confirm("Are you sure you want to delete this task? This action cannot be undone.")) {
                      return
                    }
                    
                    try {
                      const result = await deleteTask(task.id, user?.id || '');
                      
                      if (!result.success) {
                        throw new Error(result.error || 'Failed to delete task');
                      }
                      
                      toast.success("Task deleted successfully");
                      router.push('/poster/tasks');
                      router.refresh();
                    } catch (error) {
                      console.error('Error deleting task:', error);
                      toast.error(error instanceof Error ? error.message : "Failed to delete task");
                    }
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
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

              {task.status !== "OPEN" && (
                <div>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{task.progress}%</span>
                  </div>
                  <Progress value={task.progress} className="h-2" />
                </div>
              )}

              {task.attachments && task.attachments.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Attachments</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    {task.attachments.map((file, index) => (
                      <a
                        key={index}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline flex items-center gap-2"
                      >
                        <FilePlus className="h-4 w-4" />
                        {file.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {task && task.status === "OPEN" && task.bids && task.bids.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Bids ({task.bids.length})</CardTitle>
                <CardDescription>Review and accept bids from doers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {task.bids.map((bid) => (
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
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Doer's Proposed Bid</h4>
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
                ))}
              </CardContent>
            </Card>
          )}

          {task && task.doerInfo && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Doer Information</CardTitle>
                  <CardDescription>Details about the assigned doer</CardDescription>
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
                    <>
                      <div className="mt-4">
                        <h3 className="text-sm font-medium mb-2">Bio</h3>
                        <p className="text-sm text-muted-foreground">{task.doerInfo.bio}</p>
                      </div>
                    </>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={handleMessageDoer}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Doer
                  </Button>
                </CardFooter>
              </Card>

              <Card id="messages-section">
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
                    <div className="text-center py-6 text-muted-foreground">
                      No doer is currently assigned to this task.
                    </div>
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}


