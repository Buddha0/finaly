-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "acceptedBidId" TEXT,
ADD COLUMN     "stripePaymentIntentId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkId" TEXT,
ADD COLUMN     "stripeAccountVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "stripeConnectAccountId" TEXT;
