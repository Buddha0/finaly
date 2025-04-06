'use server'

import prisma from "@/lib/db"
import { AssignmentStatus } from "@prisma/client"

export async function getUserTasks(userId: string) {
    try {
        const tasks = await prisma.assignment.findMany({
            where: {
                posterId: userId
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                doer: {
                    select: {
                        name: true
                    }
                },
                messages: {
                    select: {
                        id: true
                    }
                },
                bids: {
                    select: {
                        id: true
                    }
                },
                submissions: {
                    select: {
                        id: true
                    }
                }
            }
        })

        return {
            success: true,
            data: tasks.map(task => ({
                ...task,
                doerName: task.doer?.name || undefined,
                messagesCount: task.messages.length,
                bidsCount: task.status === 'OPEN' ? task.bids.length : undefined,
                submissionsCount: task.submissions.length,
                progress: getTaskProgress(task.status)
            }))
        }
    } catch (error) {
        console.error("Error fetching tasks:", error)
        return {
            success: false,
            error: "Failed to fetch tasks"
        }
    }
}

export async function getTaskDetails(taskId: string, userId: string) {
    try {
        const task = await prisma.assignment.findUnique({
            where: {
                id: taskId,
                posterId: userId // Ensure the user owns this task
            },
            include: {
                doer: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        rating: true,
                        bio: true
                    }
                },
                messages: {
                    orderBy: {
                        createdAt: 'asc'
                    },
                    include: {
                        sender: {
                            select: {
                                id: true,
                                name: true,
                                image: true
                            }
                        }
                    }
                },
                bids: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                                rating: true
                            }
                        }
                    }
                },
                submissions: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                                rating: true
                            }
                        }
                    }
                },
                payment: true // Include payment information
            }
        })

        if (!task) {
            return {
                success: false,
                error: "Task not found"
            }
        }

        return {
            success: true,
            data: {
                ...task,
                progress: getTaskProgress(task.status),
                doerInfo: task.doer ? {
                    id: task.doer.id,
                    name: task.doer.name,
                    image: task.doer.image,
                    rating: task.doer.rating,
                    bio: task.doer.bio
                } : null,
                messages: task.messages.map(msg => ({
                    id: msg.id,
                    content: msg.content,
                    createdAt: msg.createdAt,
                    sender: {
                        id: msg.sender.id,
                        name: msg.sender.name,
                        image: msg.sender.image
                    }
                })),
                bids: task.bids.map(bid => ({
                    id: bid.id,
                    content: bid.content,
                    bidAmount: bid.bidAmount,
                    status: bid.status,
                    createdAt: bid.createdAt,
                    user: {
                        id: bid.user.id,
                        name: bid.user.name,
                        image: bid.user.image,
                        rating: bid.user.rating
                    }
                })),
                submissions: task.submissions.map(sub => ({
                    id: sub.id,
                    content: sub.content,
                    status: sub.status,
                    createdAt: sub.createdAt,
                    user: {
                        id: sub.user.id,
                        name: sub.user.name,
                        image: sub.user.image,
                        rating: sub.user.rating
                    }
                })),
                payment: task.payment // Include payment in the returned data
            }
        }
    } catch (error) {
        console.error("Error fetching task details:", error)
        return {
            success: false,
            error: "Failed to fetch task details"
        }
    }
}

function getTaskProgress(status: AssignmentStatus): number {
    switch (status) {
        case 'OPEN':
            return 0
        case 'ASSIGNED':
            return 25
        case 'IN_PROGRESS':
            return 50
        case 'UNDER_REVIEW':
            return 75
        case 'COMPLETED':
            return 100
        case 'CANCELLED':
            return 0
        default:
            return 0
    }
}

export async function deleteTask(taskId: string, userId: string) {
    try {
        const task = await prisma.assignment.findUnique({
            where: {
                id: taskId,
                posterId: userId,
            },
        });

        if (!task) {
            return { success: false, error: "Task not found" };
        }

        // Only allow deletion if the task is in OPEN status
        if (task.status !== "OPEN") {
            return { 
                success: false, 
                error: "Cannot delete a task that is already in progress or completed" 
            };
        }

        await prisma.assignment.delete({
            where: {
                id: taskId,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Error deleting task:", error);
        return { success: false, error: "Failed to delete task" };
    }
}

export async function updateTask(
    taskId: string, 
    userId: string, 
    data: {
        title: string;
        description: string;
        category: string;
        budget: number;
        deadline: Date;
        attachments?: any;
    }
) {
    try {
        const task = await prisma.assignment.findUnique({
            where: {
                id: taskId,
                posterId: userId,
            },
        });

        if (!task) {
            return { success: false, error: "Task not found" };
        }

        // Only allow updates if the task is in OPEN status
        if (task.status !== "OPEN") {
            return { 
                success: false, 
                error: "Cannot update a task that is already in progress or completed" 
            };
        }

        const updatedTask = await prisma.assignment.update({
            where: {
                id: taskId,
            },
            data: {
                title: data.title,
                description: data.description,
                category: data.category,
                budget: data.budget,
                deadline: data.deadline,
                attachments: data.attachments || task.attachments,
            },
        });

        return { success: true, data: updatedTask };
    } catch (error) {
        console.error("Error updating task:", error);
        return { success: false, error: "Failed to update task" };
    }
}

export async function submitBid(userId: string, taskId: string, bidContent: string, bidAmount: number) {
    console.log(`Submitting bid: User=${userId}, Task=${taskId}, Amount=${bidAmount}`);
    
    if (!userId || !taskId) {
        console.error("Missing required fields:", { userId, taskId });
        return {
            success: false,
            error: "User ID and Task ID are required"
        };
    }

    if (!bidContent || bidContent.trim() === '') {
        return {
            success: false,
            error: "Bid content is required"
        };
    }

    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
        return {
            success: false,
            error: "A valid bid amount is required"
        };
    }
    
    try {
        // Check if task exists and is open
        const task = await prisma.assignment.findUnique({
            where: {
                id: taskId,
                status: 'OPEN'
            }
        });

        if (!task) {
            console.log("Task not found or not open:", taskId);
            return {
                success: false,
                error: "Task not found or is no longer accepting bids"
            };
        }

        // Prevent users from bidding on their own tasks
        if (task.posterId === userId) {
            return {
                success: false,
                error: "You cannot bid on your own task"
            };
        }

        // Check if user has already placed a bid
        const existingBid = await prisma.bid.findFirst({
            where: {
                userId: userId,
                assignmentId: taskId
            }
        });

        if (existingBid) {
            console.log("User already bid on this task:", userId, taskId);
            return {
                success: false,
                error: "You have already placed a bid on this task"
            };
        }

        console.log("Creating bid with content:", bidContent);

        // Create the bid
        const bid = await prisma.bid.create({
            data: {
                content: bidContent,
                bidAmount: bidAmount,
                status: "pending",
                userId,
                assignmentId: taskId
            }
        });
        
        console.log("Bid created successfully:", bid.id);

        return {
            success: true,
            data: bid
        };
    } catch (error) {
        console.error("Error submitting bid:", error);
        
        // Check for specific Prisma errors
        const errorMessage = error instanceof Error ? error.message : "Failed to submit bid";
        
        if (errorMessage.includes("foreign key constraint")) {
            return {
                success: false,
                error: "Invalid user or task ID"
            };
        }
        
        // Return a properly structured error response
        return {
            success: false,
            error: errorMessage
        };
    }
}

export async function getAvailableTasks(userId?: string) {
    try {
        // Only fetch open tasks and exclude tasks where the user is the poster
        const tasks = await prisma.assignment.findMany({
            where: {
                status: 'OPEN', // Only fetch tasks that are open
                payment: null, // Exclude tasks that already have a payment (meaning a bid was accepted)
                ...(userId ? { 
                    NOT: { 
                        posterId: userId // Exclude tasks created by the current user
                    } 
                } : {})
            },
            orderBy: {
                createdAt: 'desc' // Default sort by newest
            },
            include: {
                bids: {
                    select: {
                        id: true
                    }
                }
            }
        });

        console.log(`Found ${tasks.length} tasks`);

        return {
            success: true,
            data: tasks.map(task => ({
                id: task.id,
                title: task.title,
                description: task.description,
                category: task.category,
                budget: task.budget,
                deadline: task.deadline,
                status: task.status.toLowerCase(),
                bidsCount: task.bids.length,
                createdAt: task.createdAt
            }))
        };
    } catch (error) {
        console.error("Error fetching available tasks:", error);
        return {
            success: false,
            error: "Failed to fetch available tasks"
        };
    }
}

export async function getUserBids(userId: string) {
    try {
        if (!userId) {
            return {
                success: false,
                error: "User ID is required"
            };
        }

        // Fetch all bids made by the user
        const bids = await prisma.bid.findMany({
            where: {
                userId: userId,
                OR: [
                    // Include accepted bids where this user is the doer
                    {
                        status: "accepted",
                        assignment: {
                            doerId: userId
                        }
                    },
                    // Include pending bids for open tasks
                    {
                        status: "pending",
                        assignment: {
                            status: "OPEN"
                        }
                    },
                    // Include rejected bids (for history)
                    {
                        status: "rejected"
                    }
                ]
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                assignment: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        category: true,
                        budget: true,
                        deadline: true,
                        status: true,
                        createdAt: true,
                        doerId: true,
                        poster: {
                            select: {
                                id: true,
                                name: true,
                                image: true
                            }
                        }
                    }
                }
            }
        });

        console.log(`Found ${bids.length} bids for user ${userId}`);

        // Transform the data for the client
        return {
            success: true,
            data: bids.map(bid => {
                return {
                    id: bid.id,
                    status: bid.status,
                    bidAmount: bid.bidAmount,
                    bidDescription: bid.content,
                    createdAt: bid.createdAt,
                    task: {
                        id: bid.assignment.id,
                        title: bid.assignment.title,
                        description: bid.assignment.description,
                        category: bid.assignment.category,
                        budget: bid.assignment.budget,
                        deadline: bid.assignment.deadline,
                        status: bid.assignment.status,
                        poster: bid.assignment.poster
                    }
                };
            })
        };
    } catch (error) {
        console.error("Error fetching user bids:", error);
        return {
            success: false,
            error: "Failed to fetch bids"
        };
    }
}

export async function withdrawBid(bidId: string, userId: string) {
    try {
        if (!bidId || !userId) {
            return {
                success: false,
                error: "Bid ID and User ID are required"
            };
        }

        // Find the bid and verify ownership
        const bid = await prisma.bid.findUnique({
            where: {
                id: bidId
            }
        });

        if (!bid) {
            return {
                success: false,
                error: "Bid not found"
            };
        }

        if (bid.userId !== userId) {
            return {
                success: false,
                error: "You don't have permission to withdraw this bid"
            };
        }

        if (bid.status !== "pending") {
            return {
                success: false,
                error: "You can only withdraw pending bids"
            };
        }

        // Delete the bid
        await prisma.bid.delete({
            where: {
                id: bidId
            }
        });

        return {
            success: true,
            message: "Bid withdrawn successfully"
        };
    } catch (error) {
        console.error("Error withdrawing bid:", error);
        return {
            success: false,
            error: "Failed to withdraw bid"
        };
    }
}

export async function updateBid(bidId: string, userId: string, content: string, bidAmount: number) {
    try {
        if (!bidId || !userId) {
            return {
                success: false,
                error: "Bid ID and User ID are required"
            };
        }

        if (!content || content.trim() === '') {
            return {
                success: false,
                error: "Bid content is required"
            };
        }

        if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
            return {
                success: false,
                error: "A valid bid amount is required"
            };
        }

        // Find the bid and verify ownership
        const bid = await prisma.bid.findUnique({
            where: {
                id: bidId
            }
        });

        if (!bid) {
            return {
                success: false,
                error: "Bid not found"
            };
        }

        if (bid.userId !== userId) {
            return {
                success: false,
                error: "You don't have permission to update this bid"
            };
        }

        if (bid.status !== "pending") {
            return {
                success: false,
                error: "You can only update pending bids"
            };
        }

        // Update the bid
        const updatedBid = await prisma.bid.update({
            where: {
                id: bidId
            },
            data: {
                content,
                bidAmount
            }
        });

        return {
            success: true,
            data: updatedBid,
            message: "Bid updated successfully"
        };
    } catch (error) {
        console.error("Error updating bid:", error);
        return {
            success: false,
            error: "Failed to update bid"
        };
    }
}

export async function acceptBid(bidId: string, userId: string) {
    try {
        if (!bidId || !userId) {
            return {
                success: false,
                error: "Bid ID and User ID are required"
            };
        }

        // Find the bid
        const bid = await prisma.bid.findUnique({
            where: {
                id: bidId
            },
            include: {
                assignment: true
            }
        });

        if (!bid) {
            return {
                success: false,
                error: "Bid not found"
            };
        }

        // Verify the user is the poster of the task
        if (bid.assignment.posterId !== userId) {
            return {
                success: false,
                error: "You don't have permission to accept this bid"
            };
        }

        // Check if the task is still open
        if (bid.assignment.status !== "OPEN") {
            return {
                success: false,
                error: "This task is no longer open for accepting bids"
            };
        }

        // Prevent users from accepting their own bids (self-completion of tasks)
        if (bid.userId === userId) {
            return {
                success: false,
                error: "You cannot accept your own bid on your own task"
            };
        }

        // Start a transaction to update bid status and task status
        const result = await prisma.$transaction(async (prisma) => {
            // Update the bid status
            const updatedBid = await prisma.bid.update({
                where: {
                    id: bidId
                },
                data: {
                    status: "accepted"
                }
            });

            // Update all other bids for this task to rejected
            await prisma.bid.updateMany({
                where: {
                    assignmentId: bid.assignmentId,
                    id: {
                        not: bidId
                    }
                },
                data: {
                    status: "rejected"
                }
            });

            // Update the task status and assign the doer
            const updatedTask = await prisma.assignment.update({
                where: {
                    id: bid.assignmentId
                },
                data: {
                    status: "ASSIGNED",
                    doerId: bid.userId
                }
            });

            return { updatedBid, updatedTask };
        });

        return {
            success: true,
            data: result,
            message: "Bid accepted successfully"
        };
    } catch (error) {
        console.error("Error accepting bid:", error);
        return {
            success: false,
            error: "Failed to accept bid"
        };
    }
}

export async function rejectBid(bidId: string, userId: string) {
    try {
        if (!bidId || !userId) {
            return {
                success: false,
                error: "Bid ID and User ID are required"
            };
        }

        // Find the bid
        const bid = await prisma.bid.findUnique({
            where: {
                id: bidId
            },
            include: {
                assignment: true
            }
        });

        if (!bid) {
            return {
                success: false,
                error: "Bid not found"
            };
        }

        // Verify the user is the poster of the task
        if (bid.assignment.posterId !== userId) {
            return {
                success: false,
                error: "You don't have permission to reject this bid"
            };
        }

        // Check if the task is still open
        if (bid.assignment.status !== "OPEN") {
            return {
                success: false,
                error: "This task is no longer open for rejecting bids"
            };
        }

        // Update the bid status
        const updatedBid = await prisma.bid.update({
            where: {
                id: bidId
            },
            data: {
                status: "rejected"
            }
        });

        return {
            success: true,
            data: updatedBid,
            message: "Bid rejected successfully"
        };
    } catch (error) {
        console.error("Error rejecting bid:", error);
        return {
            success: false,
            error: "Failed to reject bid"
        };
    }
}

export async function getDoerTaskDetails(taskId: string, userId: string) {
    try {
        console.log(`Fetching task details for taskId=${taskId}, userId=${userId}`);
        
        // Find the task - either the user is the doer or the task is open and available
        const task = await prisma.assignment.findFirst({
            where: {
                id: taskId,
                OR: [
                    { doerId: userId }, // User is assigned to this task
                    { status: 'OPEN' } // Task is open for bidding
                ]
            },
            include: {
                poster: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        rating: true,
                        createdAt: true
                    }
                },
                messages: {
                    orderBy: {
                        createdAt: 'asc'
                    },
                    include: {
                        sender: {
                            select: {
                                id: true,
                                name: true,
                                image: true
                            }
                        }
                    }
                },
                bids: {
                    where: {
                        userId: userId // Only include the doer's own bid
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                submissions: {
                    where: {
                        userId: userId // Only include the doer's own submissions
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });

        console.log(`Task query result:`, task ? `Found task with ID ${task.id}` : 'No task found');

        if (!task) {
            // Let's try a simpler query to see if the task exists at all
            const basicTask = await prisma.assignment.findUnique({
                where: { id: taskId },
                select: { 
                    id: true, 
                    status: true, 
                    doerId: true,
                    posterId: true
                }
            });
            
            console.log(`Basic task query:`, basicTask ? 
                `Task exists with status=${basicTask.status}, doerId=${basicTask.doerId}, posterId=${basicTask.posterId}` : 
                'Task does not exist with this ID');
                
            return {
                success: false,
                error: "Task not found"
            };
        }

        // Check if the user has a bid on this task
        const userBid = task.bids.length > 0 ? task.bids[0] : null;

        return {
            success: true,
            data: {
                id: task.id,
                title: task.title,
                description: task.description,
                category: task.category,
                budget: task.budget,
                deadline: task.deadline,
                status: task.status.toLowerCase(),
                progress: getTaskProgress(task.status),
                attachments: task.attachments,
                poster: {
                    id: task.poster.id,
                    name: task.poster.name,
                    image: task.poster.image,
                    rating: task.poster.rating,
                    memberSince: task.poster.createdAt
                },
                messages: task.messages.map(msg => ({
                    id: msg.id,
                    content: msg.content,
                    createdAt: msg.createdAt,
                    isPoster: msg.sender.id === task.poster.id,
                    sender: {
                        id: msg.sender.id,
                        name: msg.sender.name,
                        image: msg.sender.image
                    }
                })),
                submissions: task.submissions.map(sub => ({
                    id: sub.id,
                    content: sub.content,
                    status: sub.status,
                    createdAt: sub.createdAt,
                    attachments: sub.attachments
                })),
                bid: userBid ? {
                    id: userBid.id,
                    amount: userBid.bidAmount,
                    timeframe: "10 days", // This should be stored in the bid model
                    message: userBid.content,
                    status: userBid.status
                } : null
            }
        };
    } catch (error) {
        console.error("Error fetching doer task details:", error);
        return {
            success: false,
            error: "Failed to fetch task details"
        };
    }
}

export async function getDoerTasks(userId: string) {
    try {
        if (!userId) {
            return {
                success: false,
                error: "User ID is required"
            };
        }

        // Fetch all tasks where the user is the assigned doer
        const tasks = await prisma.assignment.findMany({
            where: {
                doerId: userId
            },
            orderBy: {
                updatedAt: 'desc'
            },
            include: {
                poster: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                },
                messages: {
                    select: {
                        id: true
                    }
                },
                submissions: {
                    select: {
                        id: true
                    }
                }
            }
        });

        console.log(`Found ${tasks.length} tasks assigned to doer ${userId}`);

        return {
            success: true,
            data: tasks.map(task => ({
                id: task.id,
                title: task.title,
                description: task.description,
                category: task.category,
                budget: task.budget,
                deadline: task.deadline,
                status: task.status.toLowerCase(),
                progress: getTaskProgress(task.status),
                createdAt: task.createdAt,
                updatedAt: task.updatedAt,
                attachments: task.attachments,
                posterName: task.poster?.name || 'Client',
                posterImage: task.poster?.image,
                posterId: task.poster?.id,
                messagesCount: task.messages.length,
                submissionsCount: task.submissions.length
            }))
        };
    } catch (error) {
        console.error("Error fetching doer tasks:", error);
        return {
            success: false,
            error: "Failed to fetch assigned tasks"
        };
    }
}

