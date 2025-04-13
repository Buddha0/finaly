"use server";

import prisma from "@/lib/db";
import { AssignmentStatus } from "@prisma/client";


/**
 * Get active tasks for a doer
 */
export async function getActiveTasks(userId: string) {
  try {
    const assignments = await prisma.assignment.findMany({
      where: {
        doerId: userId,
        status: {
          in: ['ASSIGNED', 'IN_PROGRESS', 'UNDER_REVIEW']
        }
      },
      include: {
        poster: {
          select: {
            name: true,
            image: true
          }
        },
        submissions: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 1
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })

    // Transform data for the frontend
    return assignments.map(assignment => ({
      id: assignment.id,
      title: assignment.title,
      budget: assignment.budget,
      deadline: assignment.deadline,
      status: transformStatus(assignment.status),
      category: assignment.category,
      poster: assignment.poster,
      hasSubmissions: assignment.submissions.length > 0,
    }))
  } catch (error) {
    console.error('Error fetching active tasks:', error)
    return null
  }
}

/**
 * Get available tasks for doers to bid on
 */
export async function getAvailableTasks() {
  try {
    const assignments = await prisma.assignment.findMany({
      where: {
        status: 'OPEN'
      },
      include: {
        poster: {
          select: {
            name: true,
            image: true
          }
        },
        bids: {
          select: {
            id: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    })

    // Transform data for the frontend
    return assignments.map(assignment => ({
      id: assignment.id,
      title: assignment.title,
      description: truncateDescription(assignment.description),
      budget: assignment.budget,
      deadline: assignment.deadline,
      category: assignment.category,
      poster: assignment.poster,
      bidCount: assignment.bids.length
    }))
  } catch (error) {
    console.error('Error fetching available tasks:', error)
    return null
  }
}

/**
 * Get recent bids placed by a doer
 */
export async function getRecentBids(userId: string) {
  try {
    const bids = await prisma.bid.findMany({
      where: {
        userId: userId
      },
      include: {
        assignment: {
          select: {
            id: true,
            title: true,
            budget: true,
            status: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 5
    })

    // Transform data for the frontend
    return bids.map(bid => ({
      id: bid.id,
      taskId: bid.assignment.id,
      taskTitle: bid.assignment.title,
      bidAmount: bid.bidAmount,
      taskBudget: bid.assignment.budget,
      status: bid.status,
      taskStatus: transformStatus(bid.assignment.status),
      createdAt: bid.createdAt
    }))
  } catch (error) {
    console.error('Error fetching recent bids:', error)
    return null
  }
}

/**
 * Get activity summary for the doer dashboard
 */
export async function getUserActivitySummary(userId: string) {
  try {
    // Get most recent unread messages
    const recentMessages = await prisma.message.findMany({
      where: {
        receiverId: userId,
        isRead: false
      },
      include: {
        sender: {
          select: {
            name: true,
            image: true
          }
        },
        assignment: {
          select: {
            title: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3
    })

    // Get task status updates
    const recentTaskUpdates = await prisma.assignment.findMany({
      where: {
        doerId: userId,
        status: {
          not: 'COMPLETED'
        }
      },
      orderBy: {
        updatedAt: 'desc'
      },
      take: 3
    })

    // Get most recent bid
    const recentBid = await prisma.bid.findFirst({
      where: {
        userId: userId
      },
      include: {
        assignment: {
          select: {
            title: true,
            status: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data for the frontend
    return {
      recentMessages: recentMessages.map(message => ({
        id: message.id,
        content: message.content,
        sender: message.sender,
        taskTitle: message.assignment?.title || 'Unknown Task',
        createdAt: message.createdAt
      })),
      recentTaskUpdates: recentTaskUpdates.map(task => ({
        id: task.id,
        title: task.title,
        status: transformStatus(task.status),
        updatedAt: task.updatedAt
      })),
      recentBid: recentBid ? {
        id: recentBid.id,
        taskTitle: recentBid.assignment.title,
        status: recentBid.status,
        taskStatus: transformStatus(recentBid.assignment.status),
        createdAt: recentBid.createdAt
      } : null
    }
  } catch (error) {
    console.error('Error fetching user activity summary:', error)
    return null
  }
}

/**
 * Helper function to transform DB status to UI-friendly format
 */
function transformStatus(status: AssignmentStatus | string): string {
  switch (status) {
    case 'OPEN':
      return 'open'
    case 'ASSIGNED':
      return 'assigned'
    case 'IN_PROGRESS':
      return 'in-progress'
    case 'UNDER_REVIEW':
      return 'pending-review'
    case 'COMPLETED':
      return 'completed'
    case 'CANCELLED':
      return 'cancelled'
    default:
      return status.toLowerCase()
  }
}

/**
 * Helper function to truncate long task descriptions
 */
function truncateDescription(description: string): string {
  if (description.length > 120) {
    return description.substring(0, 120) + '...'
  }
  return description
}