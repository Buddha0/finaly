"use client"

import { useState, useEffect } from 'react'
import { Bell, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { formatDistanceToNow } from 'date-fns'
import { toast } from 'sonner'
import Link from 'next/link'

interface Message {
  id: string
  content: string
  isRead: boolean
  createdAt: Date
  assignmentId?: string | null
}

export function NotificationsPanel() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const unreadCount = messages.filter(msg => !msg.isRead).length

  // Load messages when popover is opened
  useEffect(() => {
    if (open) {
      loadMessages()
    }
  }, [open])

  const loadMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/notifications')
      const data = await response.json()
      
      if (data.success) {
        setMessages(data.messages)
      } else {
        console.error('Failed to load notifications:', data.error)
      }
    } catch (error) {
      console.error('Error loading notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (messageId: string) => {
    try {
      const response = await fetch('/api/notifications/mark-read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messageId }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setMessages(messages.map(msg => 
          msg.id === messageId ? { ...msg, isRead: true } : msg
        ))
      }
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const markAllAsRead = async () => {
    try {
      const response = await fetch('/api/notifications/mark-all-read', {
        method: 'POST',
      })
      
      const data = await response.json()
      
      if (data.success) {
        setMessages(messages.map(msg => ({ ...msg, isRead: true })))
        toast.success('All notifications marked as read')
      }
    } catch (error) {
      console.error('Error marking all messages as read:', error)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  Mark all read
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0 max-h-[60vh] overflow-auto">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin h-6 w-6 border-2 border-t-transparent border-blue-500 rounded-full" />
              </div>
            ) : messages.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No notifications
              </div>
            ) : (
              <div>
                {messages.map((message, index) => (
                  <div key={message.id}>
                    <div className={`px-4 py-3 ${message.isRead ? '' : 'bg-blue-50'}`}>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className={`text-sm ${message.isRead ? 'text-muted-foreground' : 'font-medium'}`}>
                            {message.content}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {message.assignmentId && (
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                            >
                              <Link href={`/dashboard/tasks/${message.assignmentId}`}>
                                <Bell className="h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                          {!message.isRead && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => markAsRead(message.id)}
                            >
                              <Check className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    {index < messages.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
} 