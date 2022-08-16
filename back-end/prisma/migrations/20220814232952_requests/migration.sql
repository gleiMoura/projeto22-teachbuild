-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "requests_id_key" ON "requests"("id");

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
