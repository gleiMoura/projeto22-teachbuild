/*
  Warnings:

  - You are about to drop the column `hourend` on the `requests` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_studentId_fkey";

-- AlterTable
ALTER TABLE "requests" DROP COLUMN "hourend",
ADD COLUMN     "valid" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "studentId" DROP NOT NULL;
