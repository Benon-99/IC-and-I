/*
  Warnings:

  - Added the required column `categoryID` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `services` ADD COLUMN `categoryID` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `mainDescription` VARCHAR(191) NOT NULL,
    `overviewTitle` VARCHAR(191) NOT NULL,
    `overviewContent` VARCHAR(191) NOT NULL,
    `offeringsTitle` VARCHAR(191) NOT NULL,
    `offeringsContent` VARCHAR(191) NOT NULL,
    `services` JSON NOT NULL,

    UNIQUE INDEX `Categories_category_key`(`category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
