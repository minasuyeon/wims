/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, StateStore as PrismaStateStore } from "@prisma/client";

export class StateStoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StateStoreCountArgs, "select">
  ): Promise<number> {
    return this.prisma.stateStore.count(args);
  }

  async stateStores(
    args: Prisma.StateStoreFindManyArgs
  ): Promise<PrismaStateStore[]> {
    return this.prisma.stateStore.findMany(args);
  }
  async stateStore(
    args: Prisma.StateStoreFindUniqueArgs
  ): Promise<PrismaStateStore | null> {
    return this.prisma.stateStore.findUnique(args);
  }
  async createStateStore(
    args: Prisma.StateStoreCreateArgs
  ): Promise<PrismaStateStore> {
    return this.prisma.stateStore.create(args);
  }
  async updateStateStore(
    args: Prisma.StateStoreUpdateArgs
  ): Promise<PrismaStateStore> {
    return this.prisma.stateStore.update(args);
  }
  async deleteStateStore(
    args: Prisma.StateStoreDeleteArgs
  ): Promise<PrismaStateStore> {
    return this.prisma.stateStore.delete(args);
  }
}
