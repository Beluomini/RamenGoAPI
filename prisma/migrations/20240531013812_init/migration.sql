-- CreateTable
CREATE TABLE "broths" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "broths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proteins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "proteins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brothId" TEXT NOT NULL,
    "proteinId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_brothId_fkey" FOREIGN KEY ("brothId") REFERENCES "broths"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_proteinId_fkey" FOREIGN KEY ("proteinId") REFERENCES "proteins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
