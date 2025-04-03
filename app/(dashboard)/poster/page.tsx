"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCard } from "@/components/stats-card"
import { TaskCard } from "@/components/task-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, FileText, FilePlus, Home, ListChecks, MessageSquare } from "lucide-react"
import Link from "next/link"

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

// Mock data
const recentTasks = [
  {
    id: "1",
    title: "Research Paper on Renewable Energy",
    description: "Need a 10-page research paper on renewable energy sources and their impact on climate change.",
    category: "Research",
    budget: 120,
    deadline: "2023-12-15",
    status: "in-progress" as const,
    progress: 65,
    doerName: "John Smith",
    messagesCount: 5,
  },
  {
    id: "2",
    title: "Mathematics Assignment - Calculus",
    description: "Need help with calculus problems for my university course.",
    category: "Mathematics",
    budget: 50,
    deadline: "2023-12-10",
    status: "open" as const,
    bidsCount: 3,
  },
  {
    id: "3",
    title: "Programming Project - Web Scraper",
    description: "Need a Python web scraper that can extract data from e-commerce websites.",
    category: "Programming",
    budget: 200,
    deadline: "2023-12-20",
    status: "pending-review" as const,
    progress: 100,
    doerName: "Alice Johnson",
    messagesCount: 12,
  },
]

export default function PosterDashboard() {
  return (
    <DashboardLayout navItems={navItems} userRole="poster" userName="Sarah Williams">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button asChild>
            <Link href="/poster/create-task">
              <FilePlus className="mr-2 h-4 w-4" />
              Create New Task
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Active Tasks"
            value="5"
            description="Tasks currently in progress"
            icon={Clock}
            trend={{ value: 10, isPositive: true }}
          />
          <StatsCard
            title="Completed Tasks"
            value="12"
            description="Successfully completed tasks"
            icon={CheckCircle}
            trend={{ value: 25, isPositive: true }}
          />
          <StatsCard
            title="Pending Reviews"
            value="2"
            description="Tasks awaiting your review"
            icon={FileText}
            trend={{ value: 5, isPositive: false }}
          />
          <StatsCard title="Messages" value="8" description="Unread messages from doers" icon={MessageSquare} />
        </div>

        <Tabs defaultValue="recent" className="w-full">
          <TabsList>
            <TabsTrigger value="recent">Recent Tasks</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="active">Active Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recentTasks.map((task) => (
                <TaskCard key={task.id} {...task} viewType="poster" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recentTasks
                .filter((task) => task.status === "pending-review")
                .map((task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="active" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recentTasks
                .filter((task) => task.status === "in-progress")
                .map((task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bids</CardTitle>
              <CardDescription>Latest bids on your open tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Mathematics Assignment - Calculus</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$45</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">Emily Chen</p>
                    <p className="text-sm text-muted-foreground">Mathematics Assignment - Calculus</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$55</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">Michael Brown</p>
                    <p className="text-sm text-muted-foreground">Mathematics Assignment - Calculus</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$60</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Task Activity</CardTitle>
              <CardDescription>Recent updates on your tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">New message from John Smith</p>
                    <p className="text-sm text-muted-foreground">On &quot;Research Paper on Renewable Energy&quot;</p>
                    <p className="text-xs text-muted-foreground">30 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Task progress updated</p>
                    <p className="text-sm text-muted-foreground">
                      &quot;Research Paper on Renewable Energy&quot; is now 65% complete
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Task completed</p>
                    <p className="text-sm text-muted-foreground">
                      &quot;Programming Project - Web Scraper&quot; is ready for review
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

