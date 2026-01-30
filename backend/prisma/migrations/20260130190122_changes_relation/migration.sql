/*
  Warnings:

  - You are about to drop the column `userId` on the `job` table. All the data in the column will be lost.
  - Added the required column `alumniId` to the `job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "job" DROP CONSTRAINT "job_userId_fkey";

-- DropIndex
DROP INDEX "job_userId_idx";

-- AlterTable
ALTER TABLE "job" DROP COLUMN "userId",
ADD COLUMN     "alumniId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "job_alumniId_idx" ON "job"("alumniId");

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "Alumni"("id") ON DELETE CASCADE ON UPDATE CASCADE;
