import { NextRequest, NextResponse } from 'next/server';
import { pusherServer } from '@/lib/pusher';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const authResult = await auth();
    const userId = authResult.userId;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get request data
    const { assignmentId, userId: senderId, isTyping } = await req.json();
    
    if (!assignmentId || !senderId) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    // Make sure the authenticated user matches the senderId
    if (userId !== senderId) {
      return NextResponse.json(
        { error: 'User ID mismatch' }, 
        { status: 403 }
      );
    }
    
    // Trigger the appropriate Pusher event
    const event = isTyping ? 'typing-start' : 'typing-stop';
    
    // Add a cache-busting timestamp to ensure unique events
    const timestamp = new Date().toISOString();
    const eventId = `${event}-${timestamp}-${Math.random().toString(36).substring(2, 9)}`;
    
    console.log(`Sending ${event} event for user ${senderId} in assignment ${assignmentId}`);
    
    await pusherServer.trigger(
      `assignment-${assignmentId}`,
      event,
      {
        userId: senderId,
        timestamp,
        eventId
      }
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling typing status:', error);
    return NextResponse.json(
      { error: 'Failed to process typing status' }, 
      { status: 500 }
    );
  }
} 