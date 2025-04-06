"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCard } from "@/components/stats-card"
import { TaskCard } from "@/components/task-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Role } from "@prisma/client"
import { RoleSwitcher } from "@/app/(dashboard)/components/role-switcher"
import {
  CheckCircle,
  Clock,
  FileText,
  Home,
  ListChecks,
  MessageSquare,
  Search,
  ThumbsUp,
  User,
  ListFilter,
  ClipboardList,
  Briefcase,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const navItems = [
  {
    href: "/doer",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/doer/available-tasks",
    label: "Available Tasks",
    icon: ListFilter,
  },
  {
    href: "/doer/active-tasks",
    label: "My Active Tasks",
    icon: ClipboardList,
  },
  {
    href: "/doer/bids",
    label: "My Bids",
    icon: Briefcase,
  },
  {
    href: "/doer/verification",
    label: "Verification",
    icon: ShieldCheck,
  }
]

// Mock data
const activeTasks = [
  {
    id: "1",
    title: "Research Paper on Renewable Energy",
    description: "Need a 10-page research paper on renewable energy sources and their impact on climate change.",
    category: "Research",
    budget: 120,
    deadline: "2023-12-15",
    status: "in-progress" as const,
    progress: 65,
    posterName: "Sarah Williams",
    messagesCount: 5,
  },
  {
    id: "2",
    title: "Programming Project - Web Scraper",
    description: "Need a Python web scraper that can extract data from e-commerce websites.",
    category: "Programming",
    budget: 200,
    deadline: "2023-12-20",
    status: "in-progress" as const,
    progress: 30,
    posterName: "Michael Johnson",
    messagesCount: 2,
  },
]

const availableTasks = [
  {
    id: "3",
    title: "Mathematics Assignment - Calculus",
    description: "Need help with calculus problems for my university course.",
    category: "Mathematics",
    budget: 50,
    deadline: "2023-12-10",
    status: "open" as const,
    bidsCount: 3,
  },
  {
    id: "4",
    title: "English Literature Essay - Shakespeare Analysis",
    description: "Need a 5-page analysis of Shakespeare's Macbeth focusing on the theme of ambition.",
    category: "Writing",
    budget: 80,
    deadline: "2023-12-12",
    status: "open" as const,
    bidsCount: 2,
  },
  {
    id: "5",
    title: "Data Analysis Project - Excel",
    description: "Need help analyzing survey data using Excel and creating visualizations.",
    category: "Data Analysis",
    budget: 100,
    deadline: "2023-12-18",
    status: "open" as const,
    bidsCount: 1,
  },
]

export default function DoerDashboard() {
  const { user } = useUser()
  const [currentRole, setCurrentRole] = useState<Role>("DOER")
  const router = useRouter()

  // Get user's role from metadata
  useEffect(() => {
    if (user?.publicMetadata?.role) {
      setCurrentRole(user.publicMetadata.role as Role)
    }
  }, [user])

  // Show welcome toast when component mounts
  useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.fullName || 'Doer'}!`, {
        description: "You're in the doer dashboard",
      })
    }
  }, [user])

  const handleFindTasks = () => {
    router.push("/doer/available-tasks")
    toast.info("Browsing available tasks")
  }

  return (
    <DashboardLayout navItems={navItems} userRole="doer" userName={user?.fullName || "John Smith"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button onClick={handleFindTasks}>
            <Search className="mr-2 h-4 w-4" />
            Find Tasks
          </Button>
        </div>

        {/* Role Switcher */}
        <RoleSwitcher currentRole={currentRole} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Active Tasks"
            value="2"
            description="Tasks currently in progress"
            icon={Clock}
            trend={{ value: 0, isPositive: true }}
          />
          <StatsCard
            title="Completed Tasks"
            value="8"
            description="Successfully completed tasks"
            icon={CheckCircle}
            trend={{ value: 25, isPositive: true }}
          />
          <StatsCard
            title="Success Rate"
            value="95%"
            description="Task completion rate"
            icon={ThumbsUp}
            trend={{ value: 3, isPositive: true }}
          />
          <StatsCard title="Messages" value="3" description="Unread messages from posters" icon={MessageSquare} />
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList>
            <TabsTrigger value="active">Active Tasks</TabsTrigger>
            <TabsTrigger value="available">Available Tasks</TabsTrigger>
            <TabsTrigger value="recent-bids">Recent Bids</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeTasks.map((task) => (
                <TaskCard key={task.id} {...task} viewType="doer" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="available" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {availableTasks.slice(0, 3).map((task) => (
                <TaskCard key={task.id} {...task} viewType="doer" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="recent-bids" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Mathematics Assignment - Calculus</CardTitle>
                  <CardDescription>Bid submitted 1 day ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Budget</span>
                    <span>$50</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium">Your Bid</span>
                    <span className="font-bold">$45</span>
                  </div>
                  <div className="flex justify-between items-center rounded-lg bg-muted p-2">
                    <span className="text-sm">Status</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>English Literature Essay - Shakespeare Analysis</CardTitle>
                  <CardDescription>Bid submitted 2 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Budget</span>
                    <span>$80</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium">Your Bid</span>
                    <span className="font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center rounded-lg bg-muted p-2">
                    <span className="text-sm">Status</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Activity Summary</CardTitle>
              <CardDescription>Your recent activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">New message from Sarah Williams</p>
                    <p className="text-sm text-muted-foreground">On "Research Paper on Renewable Energy"</p>
                    <p className="text-xs text-muted-foreground">30 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Updated task progress</p>
                    <p className="text-sm text-muted-foreground">
                      "Research Paper on Renewable Energy" is now 65% complete
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Submitted bid</p>
                    <p className="text-sm text-muted-foreground">
                      Bid on "Mathematics Assignment - Calculus" for $45
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Summary of your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">John Smith</h3>
                  <p className="text-sm text-muted-foreground">Joined January 2023</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-sm font-medium">Rating</span>
                  <div className="flex items-center">
                    <span className="mr-2 font-semibold">4.8/5</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-sm font-medium">Reviews</span>
                  <span>12 reviews</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-sm font-medium">Completed Tasks</span>
                  <span>8 tasks</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-sm font-medium">Success Rate</span>
                  <span>95%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

