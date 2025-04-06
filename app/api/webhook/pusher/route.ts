import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Pusher webhook handler
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-pusher-signature') || '';
  
  // Get the webhook secret from environment variables
  const webhookSecret = process.env.PUSHER_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.error('PUSHER_WEBHOOK_SECRET is not defined');
    return NextResponse.json({ error: 'Webhook secret is not configured' }, { status: 500 });
  }
  
  // Verify the webhook signature
  const expected = crypto
    .createHmac('sha256', webhookSecret)
    .update(rawBody)
    .digest('hex');
  
  if (signature !== expected) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }
  
  // Parse the webhook payload
  const payload = JSON.parse(rawBody);
  
  // Handle different webhook events
  // For now, we'll just log them, but you could perform actions based on events
  console.log('Received Pusher webhook:', payload);
  
  return NextResponse.json({ success: true });
} 