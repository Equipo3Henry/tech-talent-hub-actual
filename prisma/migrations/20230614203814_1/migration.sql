-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "birth" TEXT NOT NULL,
    "country" VARCHAR(50) NOT NULL,
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

-- CreateTable
CREATE TABLE "SoftSkills" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "optimism" VARCHAR(50),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SoftSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "logo" TEXT NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "employes" INTEGER NOT NULL DEFAULT 0,
    "jobs" INTEGER NOT NULL DEFAULT 0,
    "vacancies" INTEGER NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "country" VARCHAR(50) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_image_key" ON "User"("image");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_vacancies_key" ON "Company"("vacancies");
