import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client'; // No need to import Role here

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env');
  }

  const wh = new Webhook(SIGNING_SECRET);
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, { 'svix-id': svix_id, 'svix-timestamp': svix_timestamp, 'svix-signature': svix_signature }) as WebhookEvent;
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', { status: 400 });
  }

  const eventType = evt.type;

  // Only process user.updated events
  if (eventType === 'user.updated') {
    const userId = evt.data.id;
    const email = evt.data.email_addresses[0]?.email_address;
    const name = `${evt.data.first_name || ''} ${evt.data.last_name || ''}`.trim();
    const image = evt.data.image_url;

    if (!userId) {
      return new Response('Error: User ID not found in webhook payload', { status: 400 });
    }

    try {
      const client = await clerkClient();
      const clerkUser = await client.users.getUser(userId);

      // Get role from metadata and map to the Prisma Role
      let userRole: "POSTER" | "DOER" | "ADMIN" = "DOER"; // Default role

      if (clerkUser.publicMetadata && clerkUser.publicMetadata.role) {
        const metadataRole = clerkUser.publicMetadata.role as string;
        // Map string role to Prisma role string
        if (metadataRole.toUpperCase() === 'POSTER') {
          userRole = "POSTER";
        } else if (metadataRole.toUpperCase() === 'ADMIN') {
          userRole = "ADMIN";
        }
      }

      // Update the user in the database
      const existingUser = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (existingUser) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            name,
            email,
            image,
            role: userRole, // Use string role here
          },
        });
        console.log(`User updated in database with ID ${userId} and role ${userRole}`);
      } else {
        console.log(`User with ID ${userId} not found. Update skipped.`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response('Error: Could not update user', { status: 500 });
    }
  }

  return new Response('Webhook processed successfully', { status: 200 });
}
