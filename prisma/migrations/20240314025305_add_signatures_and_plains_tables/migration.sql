-- CreateTable
CREATE TABLE "Signatures" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Signatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plains" (
    "id" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "discountPrince" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Plains_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Signatures" ADD CONSTRAINT "Signatures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
