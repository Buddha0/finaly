"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsCard } from "@/components/stats-card"
import { ClipboardCheck, Eye, Home, ShieldCheck, Users, X, Check, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { verifyUser } from "@/actions/verify-user"
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
  }
]

// Interface for pending verifications
interface UserVerification {
  id: string
  name: string
  email: string
  role: string
  citizenshipPhotos: string[]
  verificationStatus: string
  submittedAt: string
}

export default function AdminDashboard() {
  const { user } = useUser()
  const [pendingVerifications, setPendingVerifications] = useState<UserVerification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [photoIndices, setPhotoIndices] = useState<Record<string, number>>({})

  // Function to handle photo navigation
  const navigatePhoto = (userId: string, direction: 'next' | 'prev', maxPhotos: number) => {
    setPhotoIndices(prev => {
      const currentIndex = prev[userId] || 0;
      let newIndex;
      
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % maxPhotos;
      } else {
        newIndex = (currentIndex - 1 + maxPhotos) % maxPhotos;
      }
      
      return {
        ...prev,
        [userId]: newIndex
      };
    });
  };

  // Get current photo index for a user
  const getCurrentPhotoIndex = (userId: string) => {
    return photoIndices[userId] || 0;
  };

  // Handle verification status change
  const handleVerification = async (userId: string, status: "verified" | "rejected") => {
    try {
      // Update verification status
      const result = await verifyUser({ userId, status })
      
      if (result.success) {
        // Update local state to reflect the change
        setPendingVerifications(prev => 
          prev.map(user => 
            user.id === userId 
              ? { ...user, verificationStatus: status } 
              : user
          )
        )
        
        toast.success(`User ${status === "verified" ? "verified" : "rejected"} successfully`)
      } else {
        toast.error(result.error || "Failed to update verification status")
      }
    } catch (error) {
      console.error("Error updating verification status:", error)
      toast.error("An error occurred while updating verification status")
    }
  }

  return (
    <DashboardLayout navItems={navItems} userRole="admin" userName={user?.fullName || "Admin"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Users"
            value="87"
            description="Total registered users"
            icon={Users}
          />
          <StatsCard
            title="Pending Verifications"
            value={pendingVerifications.length.toString()}
            description="Users awaiting verification"
            icon={ClipboardCheck}
          />
          <StatsCard
            title="Verified Users"
            value="62"
            description="Successfully verified users"
            icon={ShieldCheck}
          />
          <StatsCard 
            title="Active Assignments"
            value="35"
            description="Currently active assignments"
            icon={ClipboardCheck}
          />
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList>
            <TabsTrigger value="pending">Pending Verifications</TabsTrigger>
            <TabsTrigger value="verified">Verified Users</TabsTrigger>
            <TabsTrigger value="rejected">Rejected Verifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                <p>Loading verification requests...</p>
              ) : pendingVerifications.length === 0 ? (
                <p>No pending verification requests</p>
              ) : (
                pendingVerifications.map(verification => {
                  const currentIndex = getCurrentPhotoIndex(verification.id);
                  const photos = verification.citizenshipPhotos || [];
                  
                  return (
                    <Card key={verification.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle>{verification.name}</CardTitle>
                          <Badge>{verification.role}</Badge>
                        </div>
                        <CardDescription>{verification.email}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        {photos.length > 0 ? (
                          <div className="mb-4">
                            <div className="aspect-video relative rounded-md overflow-hidden border">
                              <Image 
                                src={photos[currentIndex]} 
                                alt="Citizenship document"
                                fill
                                className="object-cover"
                              />
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute top-2 right-2 bg-white/70 hover:bg-white z-10"
                                onClick={() => window.open(photos[currentIndex], '_blank')}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              
                              {photos.length > 1 && (
                                <div className="absolute inset-0 flex items-center justify-between px-2">
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90"
                                    onClick={() => navigatePhoto(verification.id, 'prev', photos.length)}
                                  >
                                    <ChevronLeft className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90" 
                                    onClick={() => navigatePhoto(verification.id, 'next', photos.length)}
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </div>
                              )}
                            </div>
                            
                            {photos.length > 1 && (
                              <div className="flex justify-center items-center mt-2">
                                <span className="text-xs text-muted-foreground">
                                  Document {currentIndex + 1} of {photos.length}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground mb-4">No citizenship documents uploaded</p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          Submitted: {verification.submittedAt}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleVerification(verification.id, "rejected")}
                        >
                          <X className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleVerification(verification.id, "verified")}
                        >
                          <Check className="mr-2 h-4 w-4" />
                          Verify
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="verified" className="mt-4">
            <p>Display verified users here</p>
          </TabsContent>
          
          <TabsContent value="rejected" className="mt-4">
            <p>Display rejected users here</p>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 