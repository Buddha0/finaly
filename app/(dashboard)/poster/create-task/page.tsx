"use client"

import { createTask } from "@/actions/create-tasks"
import { deleteFile } from "@/actions/utility/file-utility"
import { getTaskDetails, updateTask } from "@/actions/utility/task-utility"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@/utils/uploadthing"
import { useUser } from "@clerk/nextjs"
import { FilePlus, Home, ListChecks, Loader2, Paperclip, ShieldCheck, X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { toast } from "sonner"

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

function CreateTaskForm() {
    const [date, setDate] = useState<Date>()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [budget, setBudget] = useState("")
    const [priority, setPriority] = useState("")
    const [attachments, setAttachments] = useState<Array<{
        name: string;
        size: number;
        url: string;
        key: string;
    }>>([])

    const router = useRouter()
    const { user } = useUser()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [deletingFile, setDeletingFile] = useState<number | null>(null)
    const [isEditMode, setIsEditMode] = useState(false)
    const [taskId, setTaskId] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    const searchParams = useSearchParams()
    const editId = searchParams.get('edit')

    useEffect(() => {
        if (editId && user?.id) {
            setIsEditMode(true)
            setTaskId(editId)
            setIsLoading(true)
            
            getTaskDetails(editId, user.id)
                .then(result => {
                    if (result.success && result.data) {
                        // Populate form with existing data
                        setTitle(result.data.title)
                        setDescription(result.data.description)
                        setCategory(result.data.category.toLowerCase())
                        setBudget(result.data.budget.toString())
                        setDate(new Date(result.data.deadline))
                        setPriority(result.data.priority.toLowerCase())
                        
                        // Handle attachments if they exist
                        if (result.data.attachments) {
                            const existingAttachments = Array.isArray(result.data.attachments) 
                                ? result.data.attachments.map((att: any) => ({
                                    name: att.name,
                                    size: 0, // Size not available from server
                                    url: att.url,
                                    key: att.url.split('/').pop() || '' // Extract key from URL
                                }))
                                : []
                            setAttachments(existingAttachments)
                        }
                    } else {
                        toast.error(result.error || "Failed to load task details")
                        router.push('/poster/tasks')
                    }
                })
                .catch(error => {
                    console.error("Error loading task details:", error)
                    toast.error("Failed to load task details")
                    router.push('/poster/tasks')
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [editId, user?.id, router])

    const handleRemoveFile = async (index: number) => {
        const fileToRemove = attachments[index]
        setDeletingFile(index)
        
        try {
            const result = await deleteFile(fileToRemove.key)

            if (!result.success) {
                throw new Error(result.error)
            }

            // Remove from local state only if delete was successful
            setAttachments(prev => prev.filter((_, i) => i !== index))
        } catch (error) {
            console.error('Error deleting file:', error)
            toast.error('Failed to delete file. Please try again.')
        } finally {
            setDeletingFile(null)
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)

        try {
            if (!title || !description || !category || !budget || !date || !priority) {
                throw new Error("Please fill in all required fields")
            }

            if (!user?.id) {
                throw new Error("You must be logged in to create a task")
            }

            // Transform attachments to include both URL and filename
            const formattedAttachments = attachments.map(file => ({
                url: file.url,
                name: file.name
            }))

            let result;
            
            if (isEditMode) {
                // Update existing task
                result = await updateTask(taskId, user.id, {
                    title,
                    description,
                    category,
                    budget: parseFloat(budget),
                    deadline: date,
                    attachments: formattedAttachments
                })
                
                if (!result.success) {
                    throw new Error(result.error)
                }
                
                toast.success("Task updated successfully!")
            } else {
                // Create new task
                const formData = {
                    title,
                    description,
                    category,
                    budget: parseFloat(budget),
                    deadline: date,
                    priority,
                    attachments: formattedAttachments,
                    posterId: user.id
                }

                result = await createTask(formData)
                
                if (!result.success) {
                    throw new Error(result.error)
                }
                
                toast.success("Task created successfully!")
            }

            router.push("/poster/tasks")
            router.refresh()
        } catch (error: any) {
            console.error(`Error ${isEditMode ? 'updating' : 'creating'} task:`, error)
            toast.error(error.message || `Failed to ${isEditMode ? 'update' : 'create'} task`)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) {
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

    return (
        <DashboardLayout navItems={navItems} userRole="poster" userName={user?.fullName || ""}>
            <div className="flex flex-col gap-6 max-w-[100%]">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">
                        {isEditMode ? "Edit Task" : "Create New Task"}
                    </h1>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Task Details</CardTitle>
                        <CardDescription>
                            {isEditMode 
                                ? "Update the details of your task below."
                                : "Provide detailed information about your task to get the best responses from doers."
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="title">Task Title</Label>
                                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                                <p className="text-xs text-muted-foreground">
                                    Be specific and concise (e.g., &quot;5-page essay on climate change&quot;)
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Task Description</Label>
                                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                                <p className="text-xs text-muted-foreground">
                                    Include all requirements, specifications, and expectations
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger id="category" className="w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="essay">Essay Writing</SelectItem>
                                            <SelectItem value="research">Research Paper</SelectItem>
                                            <SelectItem value="programming">Programming</SelectItem>
                                            <SelectItem value="math">Mathematics</SelectItem>
                                            <SelectItem value="science">Science</SelectItem>
                                            <SelectItem value="data">Data Analysis</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="budget">Budget ($)</Label>
                                    <Input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Deadline</Label>
                                    <DatePicker date={date} setDate={setDate} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="priority">Priority</Label>
                                    <Select value={priority} onValueChange={setPriority} disabled={isEditMode}>
                                        <SelectTrigger id="priority" className="w-full">
                                            <SelectValue placeholder="Select priority" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                            <SelectItem value="urgent">Urgent</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {isEditMode && (
                                        <p className="text-xs text-muted-foreground">Priority cannot be changed once a task is created</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="attachments">Attachments</Label>
                                <div className="flex items-center gap-2">
                                    <UploadButton
                                        className="bg-[#171717] text-white p-2 rounded-md ut-button:disabled:opacity-50 ut-button:disabled:cursor-not-allowed"
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            const newFiles = res.map((file) => ({
                                                name: file.name,
                                                size: file.size,
                                                url: file.ufsUrl,
                                                key: file.key
                                            }))
                                            setAttachments(prev => [...prev, ...newFiles])
                                            console.log("Files: ", res)
                                        }}
                                        onUploadError={(error: Error) => {
                                            toast.error(error.message || "Failed to upload file")
                                        }}
                                        onUploadBegin={() => {
                                            console.log("Upload started")
                                        }}
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Upload any relevant files or resources (max 5 files, 10MB each)
                                </p>

                                {/* Display uploaded files */}
                                {attachments.length > 0 && (
                                    <div className="mt-4 space-y-2">
                                        {attachments.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-2 pr-4 border rounded-lg bg-muted/30"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Paperclip className="w-4 h-4 text-muted-foreground" />
                                                    <span className="text-sm font-medium">{file.name}</span>
                                                    <span className="text-sm text-muted-foreground">
                                                        {file.size ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : ''}
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveFile(index)}
                                                    disabled={deletingFile === index}
                                                    className="text-muted-foreground hover:text-destructive focus:outline-none"
                                                >
                                                    {deletingFile === index ? (
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                    ) : (
                                                        <X className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.back()}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {isEditMode ? "Updating..." : "Creating..."}
                                        </>
                                    ) : (
                                        isEditMode ? "Update Task" : "Create Task"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}

// Add a loading component for the Suspense fallback
function LoadingForm() {
  return (
    <DashboardLayout navItems={navItems} userRole="poster" userName="">
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Loading form...</p>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default function CreateTask() {
  return (
    <Suspense fallback={<LoadingForm />}>
      <CreateTaskForm />
    </Suspense>
  )
}

