-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
