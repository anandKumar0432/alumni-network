/*
  Warnings:

  - You are about to drop the column `currentCompany` on the `Alumni` table. All the data in the column will be lost.
  - You are about to drop the column `currentJob` on the `Alumni` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Alumni" DROP COLUMN "currentCompany",
DROP COLUMN "currentJob";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT;

-- CreateTable
CREATE TABLE "job" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "job_userId_idx" ON "job"("userId");

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
