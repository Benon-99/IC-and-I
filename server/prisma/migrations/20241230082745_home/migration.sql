-- CreateTable
CREATE TABLE `Home` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aboutUs` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;