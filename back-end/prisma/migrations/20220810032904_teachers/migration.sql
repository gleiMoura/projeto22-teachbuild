-- CreateTable
CREATE TABLE "disciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "numbers" INTEGER NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mbti" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "mbti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "mbtiId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "likeId" SERIAL NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_id_key" ON "disciplines"("id");

-- CreateIndex
CREATE UNIQUE INDEX "likes_id_key" ON "likes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mbti_id_key" ON "mbti"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_id_key" ON "teachers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_email_key" ON "teachers"("email");

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_likeId_fkey" FOREIGN KEY ("likeId") REFERENCES "likes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_mbtiId_fkey" FOREIGN KEY ("mbtiId") REFERENCES "mbti"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
