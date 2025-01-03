/*
  Warnings:

  - You are about to drop the column `features` on the `home` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `home` DROP COLUMN `features`,
    ADD COLUMN `advantages` JSON NULL;
