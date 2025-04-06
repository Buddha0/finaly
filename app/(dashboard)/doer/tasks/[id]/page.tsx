"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
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
  Search,
  Send,
  Settings,
  Upload,
  User,
} from "lucide-react"
import Link from "next/link"
import { getDoerTaskDetails } from "@/actions/utility/task-utility"
import { getUserId } from "@/actions/utility/user-utilit"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ChatInterface from "@/components/chat/ChatInterface"

const navItems = [
  {
    href: "/doer/dashboard",
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
  {
    href: "/doer/profile",
    label: "Profile",
    icon: User,
  },
  {
    href: "/doer/settings",
    label: "Settings",
    icon: Settings,
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
  progress: number
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

export default function TaskDetail({ params }: { params: { id: string } }) {
  const taskId = params.id
  const [newMessage, setNewMessage] = useState("")
  const [activeTab, setActiveTab] = useState("details")
  const [progressValue, setProgressValue] = useState(0)
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [task, setTask] = useState<TaskData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
          setProgressValue(response.data.progress)
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

  const formatTime = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
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

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleUpdateProgress = () => {
    // In a real app, this would update the progress on the backend
    console.log("Updating progress to:", progressValue)
  }

  const handleSubmitTask = () => {
    // In a real app, this would submit the task for review
    console.log("Submitting task for review with message:", submissionMessage)
  }

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
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                {task.status !== "open" && <TabsTrigger value="progress">Progress</TabsTrigger>}
                {task.status === "open" && <TabsTrigger value="bid">My Bid</TabsTrigger>}
              </TabsList>

              <TabsContent value="details" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{task.description}</p>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Budget:</span>
                        <span>${task.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Posted:</span>
                        <span>{formatDate(task.deadline)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Deadline:</span>
                        <span>{formatDate(task.deadline)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Category:</span>
                        <span>{task.category}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {task.attachments && Array.isArray(task.attachments) && task.attachments.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Attachments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {task.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-2">
                              <Paperclip className="h-4 w-4 text-muted-foreground" />
                              <span>{attachment.name || attachment.url || `Attachment ${index + 1}`}</span>
                              <Badge variant="outline">{attachment.size || 'Unknown size'}</Badge>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Posted By</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={task.poster.image || undefined} />
                        <AvatarFallback>{task.poster.name?.charAt(0) || 'P'}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{task.poster.name}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Member since {formatDate(task.poster.memberSince)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Communication with {task?.poster?.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {task.poster && task.poster.id ? (
                      <ChatInterface 
                        assignmentId={task.id} 
                        receiverId={task.poster.id} 
                      />
                    ) : (
                      <div className="text-center py-6 text-muted-foreground">
                        Unable to load communication. Poster information is missing.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {task.status !== "open" && (
                <TabsContent value="progress" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Update Progress</CardTitle>
                      <CardDescription>Current progress: {progressValue}% complete</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                        <Slider
                          value={[progressValue]}
                          min={0}
                          max={100}
                          step={5}
                          onValueChange={(value) => setProgressValue(value[0])}
                          className="py-4"
                        />
                        <Progress value={progressValue} className="h-2" />
                      </div>

                      <div className="mt-6 space-y-4">
                        <h3 className="text-sm font-medium">Milestones</h3>
                        {/* In a real app, these would come from the database */}
                        {[
                          { name: "Research and Outline", completed: progressValue >= 25, date: new Date() },
                          { name: "First Draft", completed: progressValue >= 50, date: new Date() },
                          { name: "Revisions", completed: progressValue >= 75, date: new Date() },
                          { name: "Final Submission", completed: progressValue >= 100, date: new Date() }
                        ].map((milestone, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div
                              className={`flex h-6 w-6 items-center justify-center rounded-full ${milestone.completed ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200" : "bg-muted text-muted-foreground"}`}
                            >
                              {milestone.completed ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <span className="text-xs">{index + 1}</span>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{milestone.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {milestone.completed ? "Completed" : "Due"} by {formatDate(milestone.date)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={handleUpdateProgress}>Update Progress</Button>
                    </CardFooter>
                  </Card>

                  {task.status === "in_progress" || task.status === "in-progress" && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Submit for Review</CardTitle>
                        <CardDescription>When you've completed the task, submit it for review</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Add a message to the poster about your submission..."
                            className="min-h-32"
                            value={submissionMessage}
                            onChange={(e) => setSubmissionMessage(e.target.value)}
                          />

                          <div className="rounded-lg border border-dashed p-4 text-center">
                            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                            <p className="mt-2 text-sm font-medium">Upload Files</p>
                            <p className="text-xs text-muted-foreground">Drag and drop files here or click to browse</p>
                            <Input type="file" className="mt-2 cursor-pointer" multiple />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button onClick={handleSubmitTask}>Submit for Review</Button>
                      </CardFooter>
                    </Card>
                  )}
                </TabsContent>
              )}

              {task.status === "open" && (
                <TabsContent value="bid" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Bid</CardTitle>
                      <CardDescription>Your bid details for this task</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {task.bid ? (
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <div className="mb-4 flex items-center justify-between">
                              <Badge variant={task.bid.status === "accepted" ? "default" : "outline"}>
                                {task.bid.status === "accepted" ? "Accepted" : "Pending"}
                              </Badge>
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">${task.bid.amount}</span>
                              </div>
                            </div>

                            <div className="mb-2 flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Delivery timeframe: {task.bid.timeframe}</span>
                            </div>

                            <p className="text-sm">{task.bid.message}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 text-center">
                          <p>You haven't placed a bid on this task yet.</p>
                          <Button className="mt-4">Place a Bid</Button>
                        </div>
                      )}
                    </CardContent>
                    {task.bid && task.bid.status === "pending" && (
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline">Edit Bid</Button>
                        <Button variant="destructive">Withdraw Bid</Button>
                      </CardFooter>
                    )}
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>

          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Task Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge className={`${getStatusColor(task.status)} text-white mt-1`}>
                      {getStatusLabel(task.status)}
                    </Badge>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Budget</p>
                    <p className="text-lg font-bold">${task.budget}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Deadline</p>
                    <p>{formatDate(task.deadline)}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Category</p>
                    <p>{task.category}</p>
                  </div>
                  {task.status !== "open" && (
                    <>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Progress</p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>{task.progress}% Complete</span>
                          </div>
                          <Progress value={task.progress} className="h-2 mt-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                {task.status === "open" && (!task.bid || task.bid.status === "pending") && (
                  <Button className="w-full">{task.bid ? "Edit Bid" : "Place Bid"}</Button>
                )}
                {(task.status === "in_progress" || task.status === "in-progress") && (
                  <>
                    <Button className="w-full" onClick={() => setActiveTab("progress")}>
                      Update Progress
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("messages")}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message Poster
                    </Button>
                  </>
                )}
                {(task.status === "under_review" || task.status === "pending-review") && (
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("messages")}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Poster
                  </Button>
                )}
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Poster Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={task.poster.image || undefined} />
                    <AvatarFallback>{task.poster.name?.charAt(0) || 'P'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{task.poster.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Member since {formatDate(task.poster.memberSince)}</span>
                    </div>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Tasks Posted</p>
                    <p className="font-medium">12</p> {/* This would come from the database in a real app */}
                  </div>
                  <div>
                    <p className="text-muted-foreground">Response Rate</p>
                    <p className="font-medium">95%</p> {/* This would come from the database in a real app */}
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg. Rating</p>
                    <p className="font-medium">{task.poster.rating ? `${task.poster.rating.toFixed(1)}/5` : "No rating"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Active</p>
                    <p className="font-medium">Today</p> {/* This would come from the database in a real app */}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("messages")}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

