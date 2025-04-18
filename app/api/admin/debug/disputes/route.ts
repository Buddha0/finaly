import { NextRequest, NextResponse } from "next/server";
import { getDisputesDebug } from "@/app/actions/utility/dispute-utility";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    // Check if user is admin
    const authResult = await auth();
    const userId = authResult.userId;
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    // Get admin role from database
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true }
    });
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "Admin access required" },
        { status: 403 }
      );
    }
    
    // Get debug data
    const result = await getDisputesDebug();
    
    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Debug endpoint error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
} 