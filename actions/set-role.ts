"use server";

import { clerkClient, auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db"; // Assuming you have already set up Prisma Client

export default async function SetRole(role: 'POSTER' | 'DOER' | 'ADMIN', citizenshipPhoto?: string) {

  const client = await clerkClient();

  try {

    // Get userId from Clerk's auth
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized: No user ID found");
    }

    // Validate role input (since 'POSTER', 'DOER', and 'ADMIN' are the valid values for the Role enum)
    const validRoles = ['POSTER', 'DOER', 'ADMIN'];
    if (!validRoles.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }

    // Update the user's role in Prisma database
    const user = await prisma.user.upsert({
      where: { id: userId },
      update: { 
        role,
        // Add citizenship photo if provided
        ...(citizenshipPhoto && { citizenshipPhoto }),
        verificationStatus: "pending"
      },
      create: { 
        id: userId, 
        role,
        ...(citizenshipPhoto && { citizenshipPhoto }),
        verificationStatus: "pending"
      },
    });

    // Update the role in Clerk's metadata
    const result = await client.users.updateUser(userId, {
      publicMetadata: {
        role,
        onboardingCompleted: citizenshipPhoto ? true : false,
        hasSubmittedVerification: Boolean(citizenshipPhoto)
      },
    });

    return user;
    
  } catch (error) {
    console.error("[SET_ROLE_ERROR]", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error occurred");
  }
}
