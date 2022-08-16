-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "accept" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "teacherId" INTEGER;
