/*
  Warnings:

  - Made the column `teacherId` on table `requests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "requests" ALTER COLUMN "teacherId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
