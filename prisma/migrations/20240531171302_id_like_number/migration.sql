/*
  Warnings:

  - The primary key for the `broths` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `broths` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `proteins` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `proteins` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `brothId` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `proteinId` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_broths" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_broths" ("createdAt", "description", "id", "imageActive", "imageInactive", "name", "price", "updatedAt") SELECT "createdAt", "description", "id", "imageActive", "imageInactive", "name", "price", "updatedAt" FROM "broths";
DROP TABLE "broths";
ALTER TABLE "new_broths" RENAME TO "broths";
CREATE TABLE "new_proteins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_proteins" ("createdAt", "description", "id", "imageActive", "imageInactive", "name", "price", "updatedAt") SELECT "createdAt", "description", "id", "imageActive", "imageInactive", "name", "price", "updatedAt" FROM "proteins";
DROP TABLE "proteins";
ALTER TABLE "new_proteins" RENAME TO "proteins";
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brothId" INTEGER NOT NULL,
    "proteinId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "orders_brothId_fkey" FOREIGN KEY ("brothId") REFERENCES "broths" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_proteinId_fkey" FOREIGN KEY ("proteinId") REFERENCES "proteins" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("brothId", "createdAt", "description", "id", "image", "proteinId", "updatedAt") SELECT "brothId", "createdAt", "description", "id", "image", "proteinId", "updatedAt" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check("broths");
PRAGMA foreign_key_check("proteins");
PRAGMA foreign_key_check("orders");
PRAGMA foreign_keys=ON;
