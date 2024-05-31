/*
  Warnings:

  - The primary key for the `broths` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `proteins` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brothId" TEXT NOT NULL,
    "proteinId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "orders_brothId_fkey" FOREIGN KEY ("brothId") REFERENCES "broths" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_proteinId_fkey" FOREIGN KEY ("proteinId") REFERENCES "proteins" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("brothId", "createdAt", "description", "id", "image", "proteinId", "updatedAt") SELECT "brothId", "createdAt", "description", "id", "image", "proteinId", "updatedAt" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE TABLE "new_broths" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "id" TEXT NOT NULL PRIMARY KEY,
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
PRAGMA foreign_key_check("orders");
PRAGMA foreign_key_check("broths");
PRAGMA foreign_key_check("proteins");
PRAGMA foreign_keys=ON;
