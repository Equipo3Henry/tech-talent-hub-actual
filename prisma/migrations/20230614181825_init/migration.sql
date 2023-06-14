-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "birth" TEXT NOT NULL,
    "working" BOOLEAN NOT NULL DEFAULT false,
    "cv" TEXT,
    "email" TEXT NOT NULL,
    "enfoque1" TEXT NOT NULL,
    "enfoque2" TEXT NOT NULL,
    "aboutme" TEXT,
    "experience" TEXT[],
    "titles" TEXT[],
    "knowledges" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_image_key" ON "User"("image");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
