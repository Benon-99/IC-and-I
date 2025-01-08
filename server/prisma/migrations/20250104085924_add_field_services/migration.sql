/*
  Warnings:

  - Made the column `advantages` on table `home` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `home` ADD COLUMN `services` JSON NULL,
    MODIFY `advantages` JSON NOT NULL;
