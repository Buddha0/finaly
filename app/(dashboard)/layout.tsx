import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"


export const metadata = {
  title: "Assignment Helper Platform",
  description: "A platform connecting task posters with doers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
    
          <SidebarProvider>{children}</SidebarProvider>
       
      </body>
    </html>
  )
}

