import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/db';

// eSewa Sandbox credentials
const MERCHANT_CODE = 'EPAYTEST';
const SECRET_KEY = '8gBm/:&EnhH.1/q';

export async function GET(req: NextRequest) {
  try {
    console.log('Payment success callback received');
    
    // Get the data parameter from URL
    const url = new URL(req.url);
    const data = url.searchParams.get('data');
    
    console.log('Data parameter received:', data ? 'yes' : 'no');
    
    if (!data) {
      console.error('Missing data parameter in success callback');
      return NextResponse.json({ error: 'Missing data parameter' }, { status: 400 });
    }
    
    // Decode the base64 data
    let decodedData;
    let responseData;
    
    try {
      decodedData = Buffer.from(data, 'base64').toString();
      responseData = JSON.parse(decodedData);
      console.log('Decoded eSewa response:', responseData);
    } catch (decodeError) {
      console.error('Error decoding data:', decodeError);
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }
    
    const {
      transaction_uuid,
      status,
      transaction_code,
      reference_id,
      signed_field_names,
      signature
    } = responseData;

    console.log('eSewa payment response:', { transaction_uuid, status, reference_id });
    
    // Validate the signature
    if (signed_field_names && signature) {
      console.log('Validating signature...');
      const fields = signed_field_names.split(',');
      const signatureString = fields
        .map(field => `${field}=${responseData[field]}`)
        .join(',');
      
      const expectedSignature = crypto
        .createHmac('sha256', SECRET_KEY)
        .update(signatureString)
        .digest('base64');
      
      if (signature !== expectedSignature) {
        console.error('Invalid signature. Expected:', expectedSignature, 'Received:', signature);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
      }
      
      console.log('Signature validation successful');
    } else {
      console.warn('No signature to validate in response');
    }
    
    // Find the payment record
    console.log('Finding payment record with transaction UUID:', transaction_uuid);
    const payment = await prisma.payment.findFirst({
      where: {
        esewaTransactionUuid: transaction_uuid
      },
      include: {
        assignment: true
      }
    });
    
    if (!payment) {
      console.error('Payment not found for transaction:', transaction_uuid);
      return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    }
    
    console.log('Payment found:', payment.id);
    
    // Verify payment status
    if (status !== 'COMPLETE') {
      console.error('Payment not completed, status:', status);
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 });
    }
    
    console.log('Payment status is COMPLETE, updating records...');
    
    // Update payment status and store verification data
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: 'PENDING', // Payment received but held in escrow
        esewaRefId: reference_id,
        esewaVerificationJson: responseData
      }
    });
    
    console.log('Payment record updated');
    
    // Update the assignment status to ASSIGNED
    await prisma.assignment.update({
      where: { id: payment.assignmentId },
      data: { 
        status: 'ASSIGNED',
        // Find and accept the bid associated with this payment
        doerId: payment.receiverId 
      }
    });
    
    console.log('Assignment status updated to ASSIGNED');
    
    // Update the bid status to accepted
    await prisma.bid.updateMany({
      where: { 
        assignmentId: payment.assignmentId,
        userId: payment.receiverId 
      },
      data: { status: 'accepted' }
    });
    
    console.log('Bid status updated to accepted');
    
    // Reject all other bids
    await prisma.bid.updateMany({
      where: { 
        assignmentId: payment.assignmentId,
        userId: { not: payment.receiverId }
      },
      data: { status: 'rejected' }
    });
    
    console.log('Other bids rejected');
    
    // Get the app URL for redirect
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    // Redirect to a success page
    const redirectUrl = `${appUrl}/poster/tasks/${payment.assignmentId}?payment=success`;
    console.log('Redirecting to:', redirectUrl);
    
    return NextResponse.redirect(redirectUrl);
    
  } catch (error) {
    console.error('Error processing payment success:', error);
    
    // Get the app URL for redirect
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    // Redirect to a general error page
    return NextResponse.redirect(`${appUrl}/payment-error?reason=${encodeURIComponent('An error occurred while processing payment')}`);
  }
} 