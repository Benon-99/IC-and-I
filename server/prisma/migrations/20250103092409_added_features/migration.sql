/*
  Warnings:

  - Added the required column `features` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `home` ADD COLUMN `features` JSON NOT NULL;
