/*
  Warnings:

  - Added the required column `disciplineId` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "disciplineId" INTEGER NOT NULL;
