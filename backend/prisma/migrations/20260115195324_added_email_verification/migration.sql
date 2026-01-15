/*
  Warnings:

  - A unique constraint covering the columns `[emailToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailToken" TEXT,
ADD COLUMN     "emailTokenExp" TIMESTAMP(3),
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "User_emailToken_key" ON "User"("emailToken");

-- CreateIndex
CREATE INDEX "User_emailVerified_idx" ON "User"("emailVerified");
