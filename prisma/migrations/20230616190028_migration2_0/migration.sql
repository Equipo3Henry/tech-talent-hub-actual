-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('STARTUP', 'SMALL', 'MEDIUM', 'BIG', 'MULTINATIONAL');

-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('SMALL', 'MEDIUM', 'HIGH', 'GOLD', 'PREMIUM', 'ALL');

-- CreateEnum
CREATE TYPE "ProgrammingLanguages" AS ENUM ('C', 'GO', 'JAVA', 'JAVASCRIPT', 'KOTLIN', 'R', 'OBJECTIVEC', 'PHP', 'POSTSCRIPT', 'PYTHON', 'REACT', 'RUBY', 'RUST', 'SCALA', 'SCHEME', 'SQL', 'SWIFT', 'TYPESCRIPT', 'VISUALBASICNET', 'ELIXIR', 'ERLANG');

-- CreateEnum
CREATE TYPE "Relevance" AS ENUM ('SMALL', 'MEDIUM', 'ADVANCE', 'PRO', 'ELITE', 'GLOBAL');

-- CreateEnum
CREATE TYPE "Seniority" AS ENUM ('JUNIOR', 'SEMISENIOR', 'SENIOR');

-- CreateEnum
CREATE TYPE "Volume" AS ENUM ('SMALL', 'MEDIUM', 'BIG', 'HIGH', 'HIGHER', 'ABSOLUTE');

-- CreateEnum
CREATE TYPE "Workday" AS ENUM ('FULLTIME', 'PARTTIME', 'INTERMEDIATE', 'TEMPORAL', 'INTERNSHIPTRAINEE');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo_Company" TEXT NOT NULL,
    "type" "CompanyType" NOT NULL DEFAULT 'STARTUP',
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "country" VARCHAR(50) NOT NULL,
    "vacancies" SERIAL NOT NULL,
    "description" TEXT,
    "employes" INTEGER NOT NULL DEFAULT 0,
    "jobs" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoftSkills" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SoftSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "birth" TEXT NOT NULL,
    "aboutme" TEXT,
    "working" BOOLEAN NOT NULL DEFAULT false,
    "country" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "degree" TEXT,
    "languages" TEXT[],
    "progLanguages" TEXT[],
    "profile_pictures" TEXT,
    "seniority" TEXT,
    "cv" TEXT,
    "softSkills" TEXT[],
    "recruiter" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "name_Vacancy" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "logo_Company" TEXT NOT NULL,
    "programming_Langueges" TEXT[],
    "seniority" "Seniority" NOT NULL DEFAULT 'JUNIOR',
    "years_of_experience" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "workday" "Workday" NOT NULL DEFAULT 'FULLTIME',
    "salary" INTEGER NOT NULL DEFAULT 1000,
    "date_Hire" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "Relevance" "Relevance" NOT NULL DEFAULT 'SMALL',

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_pictures_key" ON "User"("profile_pictures");
