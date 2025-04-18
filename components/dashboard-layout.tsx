"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Bell, LogOut, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { type ReactNode } from "react"
import { NotificationsPanel } from "@/app/(dashboard)/components/notifications-panel"

interface DashboardLayoutProps {
  children: ReactNode
  navItems: {
    href: string
    label: string
    icon: React.ElementType
  }[]
  userRole: string
  userName: string
  userAvatar?: string
}

export function DashboardLayout({ children, navItems, userRole, userName, userAvatar }: DashboardLayoutProps) {
  const pathname = usePathname()

  const notifications = 3
  const { isMobile } = useSidebar()

  return (
    <div className="flex min-h-screen w-full max-w-[100%]">
      <Sidebar>
        <SidebarHeader className="border-b px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              AH
            </div>
            <span className="text-lg font-semibold">Assignment Helper</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <div className="px-4 py-2">
            <p className="mb-2 text-xs font-medium text-muted-foreground">{userRole.toUpperCase()}</p>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.label}>
                      <Link href={item.href}>
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </div>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          {/* <SignedOut>
            <SignInButton />

          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={userAvatar} />
                  <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{userName}</span>
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
             
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <SidebarTrigger />

          {isMobile ? null : (
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          )}

          <div className="ml-auto flex items-center gap-2">
            <NotificationsPanel />

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar} />
                    <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 w-full">{children}</main>
      </div>
    </div>
  )
}

