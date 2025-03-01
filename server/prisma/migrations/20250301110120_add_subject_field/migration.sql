/*
  Warnings:

  - You are about to drop the `blogpost` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `submission` ADD COLUMN `subject` VARCHAR(191) NULL,
    MODIFY `message` TEXT NOT NULL;

-- DropTable
DROP TABLE `blogpost`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
