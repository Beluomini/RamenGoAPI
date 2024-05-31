/*
  Warnings:

  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
PRAGMA foreign_key_check("orders");
PRAGMA foreign_keys=ON;
