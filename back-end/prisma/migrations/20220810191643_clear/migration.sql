/*
  Warnings:

  - You are about to drop the column `moneyId` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the `money` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_moneyId_fkey";

-- DropIndex
DROP INDEX "teachers_likes_key";

-- DropIndex
DROP INDEX "teachers_moneyId_key";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "moneyId",
ADD COLUMN     "wallet" REAL NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "money";
