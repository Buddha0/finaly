import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
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
    
    // Get all disputes that might have issues
    const disputes = await prisma.dispute.findMany({
      include: {
        assignment: {
          include: {
            poster: true,
            doer: true,
          }
        },
        payment: true,
        initiator: true,
      }
    });
    
    console.log(`Found ${disputes.length} disputes to check`);
    
    const fixResults = [];
    
    // Check each dispute for issues
    for (const dispute of disputes) {
      const issues = [];
      let isFixed = false;
      
      // 1. Check if payment exists
      if (!dispute.payment) {
        issues.push("Missing payment relation");
        
        // Try to find the correct payment
        const payment = await prisma.payment.findFirst({
          where: { assignmentId: dispute.assignmentId }
        });
        
        if (payment) {
          // Fix the relation
          await prisma.dispute.update({
            where: { id: dispute.id },
            data: { paymentId: payment.id }
          });
          issues.push("Fixed: Connected to correct payment");
          isFixed = true;
        } else {
          issues.push("Failed: No matching payment found for assignment");
        }
      }
      
      // 2. Check if assignment exists
      if (!dispute.assignment) {
        issues.push("Missing assignment relation");
        
        // Check if the assignment exists at all
        const assignment = await prisma.assignment.findUnique({
          where: { id: dispute.assignmentId }
        });
        
        if (!assignment) {
          issues.push("Failed: Assignment does not exist");
          // If assignment doesn't exist, this dispute should maybe be deleted
          if (await confirm(req, "Delete dispute with missing assignment?")) {
            await prisma.dispute.delete({
              where: { id: dispute.id }
            });
            issues.push("Fixed: Deleted dispute with missing assignment");
            isFixed = true;
            continue; // Skip to next dispute
          }
        }
      }
      
      // 3. Check if initiator exists
      if (!dispute.initiator) {
        issues.push("Missing initiator relation");
        
        // Check if the user exists
        const initiator = await prisma.user.findUnique({
          where: { id: dispute.initiatorId }
        });
        
        if (!initiator) {
          issues.push("Failed: Initiator user does not exist");
        }
      }
      
      // 4. Check if all parties are connected correctly
      if (dispute.assignment && dispute.payment) {
        // Check if payment assignment matches dispute assignment
        if (dispute.payment.assignmentId !== dispute.assignmentId) {
          issues.push("Mismatch: Payment is for different assignment than dispute");
          
          // Fix by updating the payment's assignmentId
          await prisma.payment.update({
            where: { id: dispute.paymentId },
            data: { assignmentId: dispute.assignmentId }
          });
          issues.push("Fixed: Updated payment's assignment reference");
          isFixed = true;
        }
      }
      
      fixResults.push({
        id: dispute.id,
        issues: issues.length > 0 ? issues : "No issues found",
        fixed: isFixed
      });
    }
    
    // Do a final check for orphaned disputes (ones with no relations at all)
    const orphanedDisputes = await prisma.dispute.findMany({
      where: {
        OR: [
          { payment: null },
          { assignment: null },
          { initiator: null }
        ]
      }
    });
    
    if (orphanedDisputes.length > 0) {
      console.log(`Found ${orphanedDisputes.length} disputes with missing critical relations`);
      fixResults.push({
        id: "orphaned-check",
        issues: [`There are still ${orphanedDisputes.length} disputes with missing relations after fixes`],
        fixed: false
      });
    } else {
      fixResults.push({
        id: "orphaned-check",
        issues: ["All disputes now have proper relations"],
        fixed: true
      });
    }
    
    return NextResponse.json({
      success: true,
      message: `Checked ${disputes.length} disputes`,
      fixes: fixResults
    });
  } catch (error) {
    console.error("Fix endpoint error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error: " + (error instanceof Error ? error.message : "Unknown error") },
      { status: 500 }
    );
  }
}

// Helper function to simulate confirmation since we can't use browser confirm in API routes
async function confirm(req: NextRequest, message: string): Promise<boolean> {
  // Since we can't prompt in an API, we'll make decisions based on the severity
  // For now, return true to auto-fix critical issues
  return true;
} 