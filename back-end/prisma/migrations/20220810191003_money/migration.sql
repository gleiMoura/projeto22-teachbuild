/*
  Warnings:

  - A unique constraint covering the columns `[moneyId]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "moneyId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "money" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "received" REAL NOT NULL,

    CONSTRAINT "money_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "money_id_key" ON "money"("id");

-- CreateIndex
CREATE UNIQUE INDEX "money_teacherId_key" ON "money"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_moneyId_key" ON "teachers"("moneyId");

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_moneyId_fkey" FOREIGN KEY ("moneyId") REFERENCES "money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
