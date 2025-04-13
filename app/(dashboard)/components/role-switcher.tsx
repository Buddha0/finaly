"use client"

import { updateUserRole } from "@/actions/update-user-role"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Role } from "@prisma/client"
import { RefreshCcw } from "lucide-react"
import { useState, useTransition } from "react"
import { toast } from "sonner"

interface RoleSwitcherProps {
  currentRole: Role
}

export function RoleSwitcher({ currentRole }: RoleSwitcherProps) {
  const [isPending, startTransition] = useTransition()
  const [isDoer, setIsDoer] = useState(currentRole === "DOER")

  const handleRoleChange = async () => {
    const newRole = isDoer ? "POSTER" : "DOER"
    setIsDoer(!isDoer)
    
    startTransition(async () => {
      const response = await updateUserRole({ newRole })
      
      if (response.success) {
        toast.success(`Successfully switched to ${newRole.toLowerCase()} mode`)
        
        // Hard refresh the page to update Clerk user data
        window.location.href = newRole === "DOER" ? "/doer" : "/poster"
      } else {
        // If there's an error, revert the UI state
        setIsDoer(currentRole === "DOER")
        toast.error(response.error || "Failed to switch roles")
      }
    })
  }

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Switch Role</h3>
            <p className="text-sm text-muted-foreground">
              You are currently in {currentRole === "DOER" ? "Doer" : "Poster"} mode
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="role-switch" className={isDoer ? "text-muted-foreground" : "font-medium"}>Poster</Label>
            <Switch 
              id="role-switch"
              checked={isDoer}
              onCheckedChange={handleRoleChange}
              disabled={isPending}
            />
            <Label htmlFor="role-switch" className={isDoer ? "font-medium" : "text-muted-foreground"}>Doer</Label>
            
            {isPending && (
              <RefreshCcw className="ml-2 h-4 w-4 animate-spin" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 