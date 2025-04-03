"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FilePlus, Home, ListChecks } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { useState } from "react"
import { UploadButton } from "@/utils/uploadthing"

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

export default function CreateTask() {
    const [date, setDate] = useState<Date>()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [budget, setBudget] = useState("")
    const [priority, setPriority] = useState("")
    const [attachments, setAttachments] = useState<string[]>([])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent default form submission behavior

        // Gather the form data
        const formData = {
            title,
            description,
            category,
            budget,
            deadline: date,
            priority,
            attachments,
        }
        console.log("Form data: ", formData);
    }
    return (
        <DashboardLayout navItems={navItems} userRole="poster" userName="Sarah Williams" >
            <div className="flex flex-col gap-6 max-w-[100%]">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Create New Task</h1>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Task Details</CardTitle>
                        <CardDescription>
                            Provide detailed information about your task to get the best responses from doers.
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
                                    <Select onValueChange={setCategory}>
                                        <SelectTrigger id="category">
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
                                    <Select onValueChange={setPriority}>
                                        <SelectTrigger id="priority">
                                            <SelectValue placeholder="Select priority" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                            <SelectItem value="urgent">Urgent</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="attachments">Attachments</Label>
                                <div className="flex items-center gap-2">
                                    <UploadButton
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            setAttachments(res.map((file) => file.ufsUrl))
                                            console.log("Files: ", res);
                                            alert("Upload Completed");
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                            alert(`ERROR! ${error.message}`);
                                        }}
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Upload any relevant files or resources (max 5 files, 10MB each)
                                </p>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="outline">Save as Draft</Button>
                                <Button type="submit">Post Task</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}

