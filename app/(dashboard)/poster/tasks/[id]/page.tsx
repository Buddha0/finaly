"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  FileText,
  FilePlus,
  Home,
  ListChecks,
  MessageSquare,
  Paperclip,
  Send,
  Settings,
  ThumbsUp,
  User,
} from "lucide-react"
import Link from "next/link"

const navItems = [
  {
    href: "/poster/dashboard",
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
    href: "/poster/profile",
    label: "Profile",
    icon: User,
  },
  {
    href: "/poster/settings",
    label: "Settings",
    icon: Settings,
  },
]

// Mock task data
const task = {
  id: "1",
  title: "Research Paper on Renewable Energy",
  description:
    "Need a 10-page research paper on renewable energy sources and their impact on climate change. The paper should include at least 15 academic references and follow APA formatting. It should cover solar, wind, hydro, and geothermal energy sources, with a focus on their efficiency, cost, and environmental impact.",
  category: "Research",
  budget: 120,
  deadline: "2023-12-15",
  status: "in-progress",
  progress: 65,
  doerName: "John Smith",
  doerAvatar: "",
  doerRating: 4.8,
  tasksCompleted: 24,
  datePosted: "2023-11-20",
  attachments: [
    { name: "requirements.pdf", size: "1.2 MB" },
    { name: "reference_materials.zip", size: "4.5 MB" },
  ],
  messages: [
    {
      id: 1,
      sender: "Sarah Williams",
      senderAvatar: "",
      isDoer: false,
      content:
        "Hi John, I've attached the requirements and some reference materials for the research paper. Please let me know if you have any questions.",
      timestamp: "2023-11-20T14:30:00",
      attachments: [{ name: "requirements.pdf", size: "1.2 MB" }],
    },
    {
      id: 2,
      sender: "John Smith",
      senderAvatar: "",
      isDoer: true,
      content:
        "Thanks for the materials, Sarah. I've reviewed them and will start working on the paper right away. I have a question about the scope - would you like me to focus more on the economic aspects or the environmental benefits?",
      timestamp: "2023-11-20T15:45:00",
    },
    {
      id: 3,
      sender: "Sarah Williams",
      senderAvatar: "",
      isDoer: false,
      content:
        "I'd like a balanced approach, but with slightly more emphasis on the environmental benefits. Also, please make sure to include some discussion about implementation challenges.",
      timestamp: "2023-11-20T16:20:00",
    },
    {
      id: 4,
      sender: "John Smith",
      senderAvatar: "",
      isDoer: true,
      content:
        "Got it. I'll make sure to cover both aspects with the emphasis you mentioned. I'll also include a section on implementation challenges. I've started the research and will update you on the progress in a few days.",
      timestamp: "2023-11-21T09:15:00",
    },
    {
      id: 5,
      sender: "John Smith",
      senderAvatar: "",
      isDoer: true,
      content:
        "Hi Sarah, I've completed the first draft of the introduction and literature review sections. I've attached them for your review. Let me know if this is the right direction.",
      timestamp: "2023-11-25T11:30:00",
      attachments: [{ name: "draft_intro_and_lit_review.docx", size: "850 KB" }],
    },
  ],
  milestones: [
    { name: "Research and Outline", completed: true, date: "2023-11-23" },
    { name: "First Draft", completed: true, date: "2023-11-30" },
    { name: "Revisions", completed: false, date: "2023-12-07" },
    { name: "Final Submission", completed: false, date: "2023-12-14" },
  ],
  bids: [
    {
      id: 1,
      doerName: "John Smith",
      doerAvatar: "",
      amount: 120,
      timeframe: "10 days",
      message:
        "I have extensive experience in writing research papers on renewable energy. I can deliver a high-quality paper with all the requirements you've specified.",
      status: "accepted",
    },
    {
      id: 2,
      doerName: "Emily Chen",
      doerAvatar: "",
      amount: 135,
      timeframe: "8 days",
      message:
        "I'm a PhD candidate in Environmental Science and can provide a well-researched paper with the latest academic sources.",
      status: "pending",
    },
    {
      id: 3,
      doerName: "Michael Brown",
      doerAvatar: "",
      amount: 110,
      timeframe: "12 days",
      message:
        "I've written several papers on renewable energy and can deliver a comprehensive analysis of the different energy sources.",
      status: "pending",
    },
  ],
}

export default function TaskDetail() {
  const [newMessage, setNewMessage] = useState("")
  const [activeTab, setActiveTab] = useState("details")

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-500"
      case "in-progress":
        return "bg-yellow-500"
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
      case "in-progress":
        return "In Progress"
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

  const handleAcceptBid = (bidId: number) => {
    // In a real app, this would accept the bid
    console.log("Accepting bid:", bidId)
  }

  const handleRejectBid = (bidId: number) => {
    // In a real app, this would reject the bid
    console.log("Rejecting bid:", bidId)
  }

  const handleAcceptSubmission = () => {
    // In a real app, this would accept the submission
    console.log("Accepting submission")
  }

  const handleRequestRevision = () => {
    // In a real app, this would request a revision
    console.log("Requesting revision")
  }

  return (
    <DashboardLayout navItems={navItems} userRole="poster" userName="Sarah Williams">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/poster/tasks">
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
                {task.status === "open" && <TabsTrigger value="bids">Bids</TabsTrigger>}
                {task.status !== "open" && <TabsTrigger value="progress">Progress</TabsTrigger>}
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
                        <span>{formatDate(task.datePosted)}</span>
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

                {task.attachments.length > 0 && (
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
                              <span>{attachment.name}</span>
                              <Badge variant="outline">{attachment.size}</Badge>
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

                {task.status !== "open" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Assigned To</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={task.doerAvatar} />
                          <AvatarFallback>{task.doerName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{task.doerName}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ThumbsUp className="h-3 w-3" />
                            <span>{task.doerRating} Rating</span>
                            <span className="mx-1">•</span>
                            <CheckCircle className="h-3 w-3" />
                            <span>{task.tasksCompleted} Tasks Completed</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="messages" className="mt-4">
                <Card className="flex flex-col h-[600px]">
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Communication with {task.doerName || "the doer"}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto">
                    <div className="space-y-4">
                      {task.messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isDoer ? "justify-start" : "justify-end"}`}>
                          <div className={`flex max-w-[80%] gap-2 ${message.isDoer ? "flex-row" : "flex-row-reverse"}`}>
                            <Avatar className="h-8 w-8 mt-1">
                              <AvatarImage src={message.senderAvatar} />
                              <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div
                                className={`rounded-lg p-3 ${message.isDoer ? "bg-muted" : "bg-primary text-primary-foreground"}`}
                              >
                                <p className="text-sm">{message.content}</p>
                                {message.attachments && message.attachments.length > 0 && (
                                  <div className="mt-2 space-y-1">
                                    {message.attachments.map((attachment, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-1 rounded-md bg-background/50 px-2 py-1 text-xs"
                                      >
                                        <Paperclip className="h-3 w-3" />
                                        <span>{attachment.name}</span>
                                        <span className="text-muted-foreground">({attachment.size})</span>
                                        <Download className="ml-1 h-3 w-3 cursor-pointer" />
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div
                                className={`mt-1 flex text-xs text-muted-foreground ${message.isDoer ? "justify-start" : "justify-end"}`}
                              >
                                <span>
                                  {formatDate(message.timestamp)} at {formatTime(message.timestamp)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-3">
                    <div className="flex w-full items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Textarea
                        placeholder="Type your message..."
                        className="min-h-10 flex-1 resize-none"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              {task.status === "open" && (
                <TabsContent value="bids" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Bids</CardTitle>
                      <CardDescription>{task.bids.length} bids received for this task</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {task.bids.map((bid) => (
                          <Card key={bid.id}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={bid.doerAvatar} />
                                    <AvatarFallback>{bid.doerName.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{bid.doerName}</p>
                                  </div>
                                </div>
                                <Badge variant={bid.status === "accepted" ? "default" : "outline"}>
                                  {bid.status === "accepted" ? "Accepted" : "Pending"}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <p className="text-sm">{bid.message}</p>
                              <div className="mt-2 flex flex-wrap gap-4">
                                <div className="flex items-center gap-1">
                                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-medium">${bid.amount}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span>{bid.timeframe}</span>
                                </div>
                              </div>
                            </CardContent>
                            {bid.status === "pending" && (
                              <CardFooter className="flex justify-end gap-2 pt-0">
                                <Button variant="outline" size="sm" onClick={() => handleRejectBid(bid.id)}>
                                  Reject
                                </Button>
                                <Button size="sm" onClick={() => handleAcceptBid(bid.id)}>
                                  Accept Bid
                                </Button>
                              </CardFooter>
                            )}
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {task.status !== "open" && (
                <TabsContent value="progress" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress</CardTitle>
                      <CardDescription>Current progress: {task.progress}% complete</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={task.progress} className="h-2" />

                      <div className="mt-6 space-y-4">
                        <h3 className="text-sm font-medium">Milestones</h3>
                        {task.milestones.map((milestone, index) => (
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
                                {milestone.completed ? "Completed on " : "Due by "}
                                {formatDate(milestone.date)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {task.status === "pending-review" && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Review Submission</CardTitle>
                        <CardDescription>The task has been completed and is awaiting your review</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <h3 className="font-medium">Submission Message</h3>
                            <p className="mt-2 text-sm">
                              I&apos;ve completed the research paper as requested. The paper includes all the required
                              sections and follows APA formatting. I&apos;ve included 18 academic references and covered all
                              the energy sources you specified, with a focus on environmental benefits as requested.
                              Please review and let me know if you need any revisions.
                            </p>
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center justify-between rounded-md border p-2">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                  <span>renewable_energy_research_paper_final.docx</span>
                                  <Badge variant="outline">2.8 MB</Badge>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center justify-between rounded-md border p-2">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                  <span>references.pdf</span>
                                  <Badge variant="outline">1.2 MB</Badge>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" onClick={handleRequestRevision}>
                          Request Revision
                        </Button>
                        <Button onClick={handleAcceptSubmission}>Accept Submission</Button>
                      </CardFooter>
                    </Card>
                  )}
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
                {task.status === "open" && <Button className="w-full">View All Bids</Button>}
                {task.status === "in-progress" && (
                  <Button className="w-full" onClick={() => setActiveTab("messages")}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Doer
                  </Button>
                )}
                {task.status === "pending-review" && (
                  <>
                    <Button className="w-full" onClick={() => setActiveTab("progress")}>
                      Review Submission
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("messages")}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message Doer
                    </Button>
                  </>
                )}
                {task.status === "completed" && (
                  <Button variant="outline" className="w-full">
                    View Final Submission
                  </Button>
                )}
              </CardFooter>
            </Card>

            {task.status !== "open" && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Doer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={task.doerAvatar} />
                      <AvatarFallback>{task.doerName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{task.doerName}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{task.doerRating} Rating</span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-3" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Tasks Completed</p>
                      <p className="font-medium">{task.tasksCompleted}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Response Rate</p>
                      <p className="font-medium">98%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Member Since</p>
                      <p className="font-medium">Jan 2023</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Active</p>
                      <p className="font-medium">Today</p>
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
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

