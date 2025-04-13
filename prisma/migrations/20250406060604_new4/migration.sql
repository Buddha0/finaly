/*
  Warnings:

  - You are about to drop the column `citizenshipPhoto` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "citizenshipPhoto",
ADD COLUMN     "citizenshipPhotos" JSONB,
ADD COLUMN     "rejectionReason" TEXT;
