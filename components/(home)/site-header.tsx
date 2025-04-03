"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { useIsClient } from "@/app/hooks/useIsClient";

export function SiteHeader() {
  const { isSignedIn, user } = useUser();
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  // Determine dashboard route based on role
  const userRole = user?.publicMetadata?.role;
  const dashboardRoute =
    userRole === "DOER" ? "/doer" :
    userRole === "POSTER" ? "/poster" :
    userRole === "ADMIN" ? "/dashboard/admin" :
    "/dashboard"; // Default if role is unknown

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold text-xl">
          Assignment Helper
        </Link>

        <div className="flex items-center space-x-4">
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle>Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-sm hover:text-primary">
                  Home Page
                </Link>
                <Link href={dashboardRoute} className="text-sm hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/services" className="text-sm hover:text-primary">
                  Services
                </Link>
                <Link href="/help" className="text-sm hover:text-primary">
                  Get Help
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home Page
            </Link>
            <Link href={dashboardRoute} className="text-sm text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
              Get Help
            </Link>
          </nav>

          {/* Conditional Rendering */}
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Button size="sm" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
