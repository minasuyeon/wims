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
  Delivery as PrismaDelivery,
  Product as PrismaProduct,
} from "@prisma/client";

export class DeliveryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DeliveryCountArgs, "select">): Promise<number> {
    return this.prisma.delivery.count(args);
  }

  async deliveries(
    args: Prisma.DeliveryFindManyArgs
  ): Promise<PrismaDelivery[]> {
    return this.prisma.delivery.findMany(args);
  }
  async delivery(
    args: Prisma.DeliveryFindUniqueArgs
  ): Promise<PrismaDelivery | null> {
    return this.prisma.delivery.findUnique(args);
  }
  async createDelivery(
    args: Prisma.DeliveryCreateArgs
  ): Promise<PrismaDelivery> {
    return this.prisma.delivery.create(args);
  }
  async updateDelivery(
    args: Prisma.DeliveryUpdateArgs
  ): Promise<PrismaDelivery> {
    return this.prisma.delivery.update(args);
  }
  async deleteDelivery(
    args: Prisma.DeliveryDeleteArgs
  ): Promise<PrismaDelivery> {
    return this.prisma.delivery.delete(args);
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.delivery
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}