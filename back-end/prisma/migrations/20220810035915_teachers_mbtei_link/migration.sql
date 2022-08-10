/*
  Warnings:

  - Added the required column `link` to the `mbti` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mbti" ADD COLUMN     "link" TEXT NOT NULL;
