/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Supplier as PrismaSupplier,
  Product as PrismaProduct,
} from "@prisma/client";

export class SupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SupplierCountArgs, "select">): Promise<number> {
    return this.prisma.supplier.count(args);
  }

  async suppliers(
    args: Prisma.SupplierFindManyArgs
  ): Promise<PrismaSupplier[]> {
    return this.prisma.supplier.findMany(args);
  }
  async supplier(
    args: Prisma.SupplierFindUniqueArgs
  ): Promise<PrismaSupplier | null> {
    return this.prisma.supplier.findUnique(args);
  }
  async createSupplier(
    args: Prisma.SupplierCreateArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.create(args);
  }
  async updateSupplier(
    args: Prisma.SupplierUpdateArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.update(args);
  }
  async deleteSupplier(
    args: Prisma.SupplierDeleteArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.supplier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }
}
