/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Warehouse } from "./Warehouse";
import { WarehouseCountArgs } from "./WarehouseCountArgs";
import { WarehouseFindManyArgs } from "./WarehouseFindManyArgs";
import { WarehouseFindUniqueArgs } from "./WarehouseFindUniqueArgs";
import { CreateWarehouseArgs } from "./CreateWarehouseArgs";
import { UpdateWarehouseArgs } from "./UpdateWarehouseArgs";
import { DeleteWarehouseArgs } from "./DeleteWarehouseArgs";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { StateStore } from "../../stateStore/base/StateStore";
import { WarehouseService } from "../warehouse.service";
@graphql.Resolver(() => Warehouse)
export class WarehouseResolverBase {
  constructor(protected readonly service: WarehouseService) {}

  async _warehousesMeta(
    @graphql.Args() args: WarehouseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Warehouse])
  async warehouses(
    @graphql.Args() args: WarehouseFindManyArgs
  ): Promise<Warehouse[]> {
    return this.service.warehouses(args);
  }

  @graphql.Query(() => Warehouse, { nullable: true })
  async warehouse(
    @graphql.Args() args: WarehouseFindUniqueArgs
  ): Promise<Warehouse | null> {
    const result = await this.service.warehouse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Warehouse)
  async createWarehouse(
    @graphql.Args() args: CreateWarehouseArgs
  ): Promise<Warehouse> {
    return await this.service.createWarehouse({
      ...args,
      data: {
        ...args.data,

        stateStore: args.data.stateStore
          ? {
              connect: args.data.stateStore,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Warehouse)
  async updateWarehouse(
    @graphql.Args() args: UpdateWarehouseArgs
  ): Promise<Warehouse | null> {
    try {
      return await this.service.updateWarehouse({
        ...args,
        data: {
          ...args.data,

          stateStore: args.data.stateStore
            ? {
                connect: args.data.stateStore,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Warehouse)
  async deleteWarehouse(
    @graphql.Args() args: DeleteWarehouseArgs
  ): Promise<Warehouse | null> {
    try {
      return await this.service.deleteWarehouse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [InventoryItem], { name: "inventoryItems" })
  async findInventoryItems(
    @graphql.Parent() parent: Warehouse,
    @graphql.Args() args: InventoryItemFindManyArgs
  ): Promise<InventoryItem[]> {
    const results = await this.service.findInventoryItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => StateStore, {
    nullable: true,
    name: "stateStore",
  })
  async getStateStore(
    @graphql.Parent() parent: Warehouse
  ): Promise<StateStore | null> {
    const result = await this.service.getStateStore(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}