/*
  Warnings:

  - You are about to drop the column `likeId` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[likes]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_likeId_fkey";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "likeId",
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "likes";

-- CreateIndex
CREATE UNIQUE INDEX "teachers_likes_key" ON "teachers"("likes");
