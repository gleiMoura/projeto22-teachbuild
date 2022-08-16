/*
  Warnings:

  - You are about to drop the column `accept` on the `requests` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `requests` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `requests` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `requests` table. All the data in the column will be lost.
  - Added the required column `hourend` to the `requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourstart` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "requests" DROP COLUMN "accept",
DROP COLUMN "start",
DROP COLUMN "text",
DROP COLUMN "time",
ADD COLUMN     "hourend" TEXT NOT NULL,
ADD COLUMN     "hourstart" TEXT NOT NULL;
