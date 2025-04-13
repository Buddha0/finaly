"use client"

import { getAllDisputes } from "@/app/actions/utility/dispute-utility"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@clerk/nextjs"
import { FileWarning, Gavel, Home, ShieldCheck, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

// Admin navigation items
const navItems = [
  {
    href: "/dashboard/admin",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/admin/verification",
    label: "Verification",
    icon: ShieldCheck,
  },
  {
    href: "/dashboard/admin/users",
    label: "Users",
    icon: Users,
  },
  {
    href: "/dashboard/admin/disputes",
    label: "Disputes",
    icon: Gavel,
  }
]

interface Dispute {
  id: string
  reason: string
  status: string
  createdAt: Date
  assignment: {
    id: string
    title: string
    poster: {
      id: string
      name: string | null
    }
    doer: {
      id: string
      name: string | null
    } | null
  }
  initiator: {
    id: string
    name: string | null
    role: string
  }
}

export default function DisputesPage() {
  const { user } = useUser()
  const [disputes, setDisputes] = useState<Dispute[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    async function loadDisputes() {
      try {
        setLoading(true)
        const result = await getAllDisputes()
        
        if (result.success && result.data) {
          setDisputes(result.data)
        } else {
          toast.error("Failed to load disputes")
        }
      } catch (error) {
        console.error("Error loading disputes:", error)
        toast.error("An error occurred while loading disputes")
      } finally {
        setLoading(false)
      }
    }

    loadDisputes()
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "OPEN":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Open</Badge>
      case "RESOLVED_REFUND":
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">Refunded</Badge>
      case "RESOLVED_RELEASE":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Released</Badge>
      case "CANCELLED":
        return <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const filteredDisputes = disputes.filter(dispute => {
    if (activeTab === "all") return true
    if (activeTab === "open") return dispute.status === "OPEN"
    if (activeTab === "resolved") return dispute.status.startsWith("RESOLVED")
    return false
  })

  return (
    <DashboardLayout navItems={navItems} userRole="admin" userName={user?.fullName || "Admin"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dispute Management</h1>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Disputes</TabsTrigger>
            <TabsTrigger value="open">Open Disputes</TabsTrigger>
            <TabsTrigger value="resolved">Resolved Disputes</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {activeTab === "all" ? "All Disputes" : 
                   activeTab === "open" ? "Open Disputes" : "Resolved Disputes"}
                </CardTitle>
                <CardDescription>
                  {activeTab === "all" ? "View all task disputes in the system" : 
                   activeTab === "open" ? "Disputes that require your attention" : "Previously resolved disputes"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-10">
                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                  </div>
                ) : filteredDisputes.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <FileWarning className="h-12 w-12 text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium">No disputes found</h3>
                    <p className="text-muted-foreground mt-1">
                      {activeTab === "all" ? "There are no disputes in the system yet." : 
                       activeTab === "open" ? "There are no open disputes that need attention." : 
                       "There are no resolved disputes to display."}
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredDisputes.map((dispute) => (
                      <div
                        key={dispute.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg mb-1 truncate">
                              <Link href={`/dashboard/admin/disputes/${dispute.id}`} className="hover:underline">
                                {dispute.assignment.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Opened {new Date(dispute.createdAt).toLocaleDateString()} by{' '}
                              <span className="font-medium">
                                {dispute.initiator.name || 'Unknown user'} ({dispute.initiator.role === 'POSTER' ? 'Poster' : 'Doer'})
                              </span>
                            </p>
                            <div className="flex gap-2 items-center mb-4">
                              {getStatusBadge(dispute.status)}
                            </div>
                            <p className="text-sm line-clamp-2">{dispute.reason}</p>
                          </div>
                          
                          <div className="flex items-center">
                            <Button asChild size="sm" className="ml-2">
                              <Link href={`/dashboard/admin/disputes/${dispute.id}`}>
                                Review Dispute
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 