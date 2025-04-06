import { NextRequest, NextResponse } from 'next/server';
import { pusherServer } from '@/lib/pusher';
import { getCurrentUser } from '@/actions/get-current-user';

export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get signal data from request
    const data = await request.json();
    const { 
      type, 
      from, 
      to, 
      sdp, 
      candidate, 
      channelName, 
      callId,
      senderName 
    } = data;

    // Validate that the authenticated user is the sender
    if (currentUser.id !== from) {
      return NextResponse.json({ error: 'User mismatch' }, { status: 403 });
    }

    // Validate signal type
    if (!['offer', 'answer', 'ice-candidate', 'call-ended'].includes(type)) {
      return NextResponse.json({ error: 'Invalid signal type' }, { status: 400 });
    }

    // Validate that channelName is provided
    if (!channelName) {
      return NextResponse.json({ error: 'Channel name is required' }, { status: 400 });
    }

    // Forward the signal to the other user via Pusher
    await pusherServer.trigger(channelName, 'call-signal', {
      type,
      sdp,
      candidate,
      from,
      to,
      callId,
      senderName: senderName || currentUser.name,
      timestamp: Date.now()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Video call signal error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 