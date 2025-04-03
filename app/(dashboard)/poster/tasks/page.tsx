"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TaskCard } from "@/components/task-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FilePlus, Home, ListChecks, Search, X } from "lucide-react"
import Link from "next/link"

// Define types
type TaskStatus = "open" | "in-progress" | "pending-review" | "completed";

interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  deadline: string;
  status: TaskStatus;
  progress?: number;
  doerName?: string;
  messagesCount?: number;
  bidsCount?: number;
}

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
const allTasks: Task[] = [
  {
    id: "1",
    title: "Research Paper on Renewable Energy",
    description: "Need a 10-page research paper on renewable energy sources and their impact on climate change.",
    category: "Research",
    budget: 120,
    deadline: "2023-12-15",
    status: "in-progress",
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
    status: "open",
    bidsCount: 3,
  },
  {
    id: "3",
    title: "Programming Project - Web Scraper",
    description: "Need a Python web scraper that can extract data from e-commerce websites.",
    category: "Programming",
    budget: 200,
    deadline: "2023-12-20",
    status: "pending-review",
    progress: 100,
    doerName: "Alice Johnson",
    messagesCount: 12,
  },
  {
    id: "4",
    title: "Essay on Climate Change",
    description: "Need a 5-page essay discussing the effects of climate change on global ecosystems.",
    category: "Writing",
    budget: 75,
    deadline: "2023-12-12",
    status: "open",
    bidsCount: 2,
  },
  {
    id: "5",
    title: "Data Visualization Dashboard",
    description: "Need a dashboard to visualize sales data using D3.js or similar library.",
    category: "Programming",
    budget: 250,
    deadline: "2023-12-25",
    status: "in-progress",
    progress: 30,
    doerName: "Michael Brown",
    messagesCount: 3,
  },
  {
    id: "6",
    title: "Literature Review on AI Ethics",
    description: "Need a comprehensive literature review on ethical considerations in AI development.",
    category: "Research",
    budget: 180,
    deadline: "2023-12-18",
    status: "completed",
    progress: 100,
    doerName: "Emily Chen",
    messagesCount: 8,
  },
  {
    id: "7",
    title: "Physics Problem Set",
    description: "Need solutions for 20 physics problems covering mechanics and thermodynamics.",
    category: "Science",
    budget: 90,
    deadline: "2023-12-08",
    status: "completed",
    progress: 100,
    doerName: "David Wilson",
    messagesCount: 4,
  },
  {
    id: "8",
    title: "Mobile App UI Design",
    description: "Need UI designs for a fitness tracking mobile app (iOS and Android).",
    category: "Design",
    budget: 300,
    deadline: "2023-12-30",
    status: "open",
    bidsCount: 7,
  },
]

export default function PosterTasks() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Filter tasks based on search, category, and status
  const filterTasks = (tasks: Task[]): Task[] => {
    return tasks.filter((task: Task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || task.category === selectedCategory
      const matchesStatus = selectedStatus === "all" || task.status === selectedStatus

      return matchesSearch && matchesCategory && matchesStatus
    })
  }

  // Sort tasks based on selected sort option
  const sortTasks = (tasks: Task[]): Task[] => {
    switch (sortBy) {
      case "newest":
        return [...tasks].sort((a, b) => new Date(b.deadline).getTime() - new Date(a.deadline).getTime())
      case "oldest":
        return [...tasks].sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
      case "budget-high":
        return [...tasks].sort((a, b) => b.budget - a.budget)
      case "budget-low":
        return [...tasks].sort((a, b) => a.budget - b.budget)
      case "deadline":
        return [...tasks].sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
      default:
        return tasks
    }
  }

  const openTasks = allTasks.filter((task: Task) => task.status === "open")
  const inProgressTasks = allTasks.filter((task: Task) => task.status === "in-progress")
  const pendingReviewTasks = allTasks.filter((task: Task) => task.status === "pending-review")
  const completedTasks = allTasks.filter((task: Task) => task.status === "completed")

  const filteredAllTasks = sortTasks(filterTasks(allTasks))
  const filteredOpenTasks = sortTasks(filterTasks(openTasks))
  const filteredInProgressTasks = sortTasks(filterTasks(inProgressTasks))
  const filteredPendingReviewTasks = sortTasks(filterTasks(pendingReviewTasks))
  const filteredCompletedTasks = sortTasks(filterTasks(completedTasks))

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedStatus("all")
    setSortBy("newest")
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedStatus !== "all" || sortBy !== "newest"

  return (
    <DashboardLayout navItems={navItems} userRole="poster" userName="Sarah Williams">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">My Tasks</h1>
          <Button asChild>
            <Link href="/poster/create-task">
              <FilePlus className="mr-2 h-4 w-4" />
              Create New Task
            </Link>
          </Button>
        </div>

        <Card className="w-full">
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tasks..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Programming">Programming</SelectItem>
                    <SelectItem value="Writing">Writing</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="pending-review">Pending Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                    <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                    <SelectItem value="deadline">Deadline: Soonest First</SelectItem>
                  </SelectContent>
                </Select>

                {hasActiveFilters && (
                  <Button variant="outline" size="icon" onClick={clearFilters} title="Clear filters">
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-2">
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchQuery}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Category: {selectedCategory}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                  </Badge>
                )}
                {selectedStatus !== "all" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Status: {selectedStatus}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedStatus("all")} />
                  </Badge>
                )}
                {sortBy !== "newest" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Sort: {sortBy.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSortBy("newest")} />
                  </Badge>
                )}
              </div>
            )}
          </CardHeader>
        </Card>

        <div className="task-stats grid gap-4 md:grid-cols-4 w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Open Tasks</CardTitle>
              <CardDescription>Awaiting bids and assignment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{openTasks.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">In Progress</CardTitle>
              <CardDescription>Currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{inProgressTasks.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Pending Review</CardTitle>
              <CardDescription>Awaiting your review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{pendingReviewTasks.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Completed</CardTitle>
              <CardDescription>Successfully finished</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{completedTasks.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Tasks ({filteredAllTasks.length})</TabsTrigger>
            <TabsTrigger value="open">Open ({filteredOpenTasks.length})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({filteredInProgressTasks.length})</TabsTrigger>
            <TabsTrigger value="pending-review">Pending Review ({filteredPendingReviewTasks.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({filteredCompletedTasks.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            {filteredAllTasks.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAllTasks.map((task: Task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No tasks found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="open" className="mt-4">
            {filteredOpenTasks.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredOpenTasks.map((task: Task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No open tasks found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="in-progress" className="mt-4">
            {filteredInProgressTasks.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredInProgressTasks.map((task: Task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No in-progress tasks found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="pending-review" className="mt-4">
            {filteredPendingReviewTasks.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPendingReviewTasks.map((task: Task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No pending review tasks found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-4">
            {filteredCompletedTasks.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCompletedTasks.map((task: Task) => (
                  <TaskCard key={task.id} {...task} viewType="poster" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No completed tasks found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

