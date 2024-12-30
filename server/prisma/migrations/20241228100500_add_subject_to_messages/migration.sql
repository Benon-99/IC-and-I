/*
  Warnings:

  - Added the required column `subject` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `message` ADD COLUMN `subject` VARCHAR(255) NOT NULL;
