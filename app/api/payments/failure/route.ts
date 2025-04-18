import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    console.log('Payment failure callback received');
    
    // Get the data parameter from URL if it exists
    const url = new URL(req.url);
    const data = url.searchParams.get('data');
    const transactionUuid = url.searchParams.get('transaction_uuid');
    
    console.log('Parameters received:', { 
      hasData: !!data, 
      hasTransactionUuid: !!transactionUuid 
    });
    
    let responseData = {};
    
    // Try to decode data if it exists
    if (data) {
      try {
        const decodedData = Buffer.from(data, 'base64').toString();
        responseData = JSON.parse(decodedData);
        console.log('Decoded eSewa response:', responseData);
      } catch (e) {
        console.error('Error decoding eSewa response data:', e);
      }
    }
    
    // Try to find the payment
    let payment = null;
    console.log('Searching for payment record...');
    
    if (transactionUuid) {
      console.log('Searching by transaction_uuid param:', transactionUuid);
      payment = await prisma.payment.findFirst({
        where: { esewaTransactionUuid: transactionUuid }
      });
    } else if (responseData['transaction_uuid']) {
      console.log('Searching by transaction_uuid from data:', responseData['transaction_uuid']);
      payment = await prisma.payment.findFirst({
        where: { esewaTransactionUuid: responseData['transaction_uuid'] }
      });
    }
    
    // Get the app URL for redirect
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    // If payment found, update it
    if (payment) {
      console.log('Payment found:', payment.id, 'Updating to REFUNDED status');
      
      await prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'REFUNDED', // Mark as refunded since payment failed
          esewaVerificationJson: responseData
        }
      });
      
      // Redirect to the task page with failure info
      const redirectUrl = `${appUrl}/poster/tasks/${payment.assignmentId}?payment=failed`;
      console.log('Redirecting to:', redirectUrl);
      return NextResponse.redirect(redirectUrl);
    }
    
    console.log('No payment record found for this transaction');
    
    // If no payment found, redirect to generic failure page
    return NextResponse.redirect(`${appUrl}/payment/failed`);
    
  } catch (error) {
    console.error('Error processing payment failure:', error);
    
    // Get the app URL for redirect
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    return NextResponse.redirect(`${appUrl}/payment/failed`);
  }
} 