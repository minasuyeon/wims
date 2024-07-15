/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WarehouseService } from "../warehouse.service";
import { WarehouseCreateInput } from "./WarehouseCreateInput";
import { Warehouse } from "./Warehouse";
import { WarehouseFindManyArgs } from "./WarehouseFindManyArgs";
import { WarehouseWhereUniqueInput } from "./WarehouseWhereUniqueInput";
import { WarehouseUpdateInput } from "./WarehouseUpdateInput";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { InventoryItemWhereUniqueInput } from "../../inventoryItem/base/InventoryItemWhereUniqueInput";

export class WarehouseControllerBase {
  constructor(protected readonly service: WarehouseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Warehouse })
  async createWarehouse(
    @common.Body() data: WarehouseCreateInput
  ): Promise<Warehouse> {
    return await this.service.createWarehouse({
      data: {
        ...data,

        stateStore: data.stateStore
          ? {
              connect: data.stateStore,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
        capacity: true,

        stateStore: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Warehouse] })
  @ApiNestedQuery(WarehouseFindManyArgs)
  async warehouses(@common.Req() request: Request): Promise<Warehouse[]> {
    const args = plainToClass(WarehouseFindManyArgs, request.query);
    return this.service.warehouses({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
        capacity: true,

        stateStore: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Warehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async warehouse(
    @common.Param() params: WarehouseWhereUniqueInput
  ): Promise<Warehouse | null> {
    const result = await this.service.warehouse({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
        capacity: true,

        stateStore: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Warehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWarehouse(
    @common.Param() params: WarehouseWhereUniqueInput,
    @common.Body() data: WarehouseUpdateInput
  ): Promise<Warehouse | null> {
    try {
      return await this.service.updateWarehouse({
        where: params,
        data: {
          ...data,

          stateStore: data.stateStore
            ? {
                connect: data.stateStore,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          location: true,
          capacity: true,

          stateStore: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Warehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWarehouse(
    @common.Param() params: WarehouseWhereUniqueInput
  ): Promise<Warehouse | null> {
    try {
      return await this.service.deleteWarehouse({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          location: true,
          capacity: true,

          stateStore: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/inventoryItems")
  @ApiNestedQuery(InventoryItemFindManyArgs)
  async findInventoryItems(
    @common.Req() request: Request,
    @common.Param() params: WarehouseWhereUniqueInput
  ): Promise<InventoryItem[]> {
    const query = plainToClass(InventoryItemFindManyArgs, request.query);
    const results = await this.service.findInventoryItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        quantity: true,

        category: {
          select: {
            id: true,
          },
        },

        supplier: {
          select: {
            id: true,
          },
        },

        vendor: {
          select: {
            id: true,
          },
        },

        warehouse: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventoryItems")
  async connectInventoryItems(
    @common.Param() params: WarehouseWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        connect: body,
      },
    };
    await this.service.updateWarehouse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventoryItems")
  async updateInventoryItems(
    @common.Param() params: WarehouseWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        set: body,
      },
    };
    await this.service.updateWarehouse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventoryItems")
  async disconnectInventoryItems(
    @common.Param() params: WarehouseWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        disconnect: body,
      },
    };
    await this.service.updateWarehouse({
      where: params,
      data,
      select: { id: true },
    });
  }
}