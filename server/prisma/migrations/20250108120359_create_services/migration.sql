-- CreateTable
CREATE TABLE `Services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `subContent` VARCHAR(191) NOT NULL,
    `services` JSON NOT NULL,

    UNIQUE INDEX `Services_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
