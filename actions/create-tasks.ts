import prisma from "@/lib/db"
import { useAuth } from "@clerk/nextjs"

type CreateTaskInput = {
    title: string
    description: string
    category: string
    budget: number
    deadline: Date
    priority: string
    attachments: string[] // URLs from UploadThing
    additional?: string
    posterId: string
}

export async function createTask(data: CreateTaskInput) {
    const { userId } = useAuth()
    try {
        if (!userId) {
            throw new Error("User not authenticated")
        }
        const task = await prisma.assignment.create({
            data: {
                title: data.title,
                description: data.description,
                category: data.category,
                budget: data.budget,
                deadline: data.deadline,
                priority: data.priority,
                attachments: data.attachments, // Handles mix of file types (images, PDFs, etc.)
                additional: data.additional,
                posterId: userId
            },
        })

        return task
    } catch (error) {
        console.error("Error creating task:", error)
        throw new Error("Failed to create task")
    }
}
