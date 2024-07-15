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
import { InventoryItem } from "./InventoryItem";
import { InventoryItemCountArgs } from "./InventoryItemCountArgs";
import { InventoryItemFindManyArgs } from "./InventoryItemFindManyArgs";
import { InventoryItemFindUniqueArgs } from "./InventoryItemFindUniqueArgs";
import { CreateInventoryItemArgs } from "./CreateInventoryItemArgs";
import { UpdateInventoryItemArgs } from "./UpdateInventoryItemArgs";
import { DeleteInventoryItemArgs } from "./DeleteInventoryItemArgs";
import { Category } from "../../category/base/Category";
import { Supplier } from "../../supplier/base/Supplier";
import { Vendor } from "../../vendor/base/Vendor";
import { Warehouse } from "../../warehouse/base/Warehouse";
import { InventoryItemService } from "../inventoryItem.service";
@graphql.Resolver(() => InventoryItem)
export class InventoryItemResolverBase {
  constructor(protected readonly service: InventoryItemService) {}

  async _inventoryItemsMeta(
    @graphql.Args() args: InventoryItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [InventoryItem])
  async inventoryItems(
    @graphql.Args() args: InventoryItemFindManyArgs
  ): Promise<InventoryItem[]> {
    return this.service.inventoryItems(args);
  }

  @graphql.Query(() => InventoryItem, { nullable: true })
  async inventoryItem(
    @graphql.Args() args: InventoryItemFindUniqueArgs
  ): Promise<InventoryItem | null> {
    const result = await this.service.inventoryItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => InventoryItem)
  async createInventoryItem(
    @graphql.Args() args: CreateInventoryItemArgs
  ): Promise<InventoryItem> {
    return await this.service.createInventoryItem({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        supplier: args.data.supplier
          ? {
              connect: args.data.supplier,
            }
          : undefined,

        vendor: args.data.vendor
          ? {
              connect: args.data.vendor,
            }
          : undefined,

        warehouse: args.data.warehouse
          ? {
              connect: args.data.warehouse,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => InventoryItem)
  async updateInventoryItem(
    @graphql.Args() args: UpdateInventoryItemArgs
  ): Promise<InventoryItem | null> {
    try {
      return await this.service.updateInventoryItem({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          supplier: args.data.supplier
            ? {
                connect: args.data.supplier,
              }
            : undefined,

          vendor: args.data.vendor
            ? {
                connect: args.data.vendor,
              }
            : undefined,

          warehouse: args.data.warehouse
            ? {
                connect: args.data.warehouse,
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

  @graphql.Mutation(() => InventoryItem)
  async deleteInventoryItem(
    @graphql.Args() args: DeleteInventoryItemArgs
  ): Promise<InventoryItem | null> {
    try {
      return await this.service.deleteInventoryItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: InventoryItem
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Supplier, {
    nullable: true,
    name: "supplier",
  })
  async getSupplier(
    @graphql.Parent() parent: InventoryItem
  ): Promise<Supplier | null> {
    const result = await this.service.getSupplier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Vendor, {
    nullable: true,
    name: "vendor",
  })
  async getVendor(
    @graphql.Parent() parent: InventoryItem
  ): Promise<Vendor | null> {
    const result = await this.service.getVendor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Warehouse, {
    nullable: true,
    name: "warehouse",
  })
  async getWarehouse(
    @graphql.Parent() parent: InventoryItem
  ): Promise<Warehouse | null> {
    const result = await this.service.getWarehouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
