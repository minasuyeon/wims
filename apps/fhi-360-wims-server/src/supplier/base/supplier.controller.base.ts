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
import { SupplierService } from "../supplier.service";
import { SupplierCreateInput } from "./SupplierCreateInput";
import { Supplier } from "./Supplier";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";
import { SupplierUpdateInput } from "./SupplierUpdateInput";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { InventoryItemWhereUniqueInput } from "../../inventoryItem/base/InventoryItemWhereUniqueInput";

export class SupplierControllerBase {
  constructor(protected readonly service: SupplierService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Supplier })
  async createSupplier(
    @common.Body() data: SupplierCreateInput
  ): Promise<Supplier> {
    return await this.service.createSupplier({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        contactInfo: true,
        stateId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Supplier] })
  @ApiNestedQuery(SupplierFindManyArgs)
  async suppliers(@common.Req() request: Request): Promise<Supplier[]> {
    const args = plainToClass(SupplierFindManyArgs, request.query);
    return this.service.suppliers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        contactInfo: true,
        stateId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async supplier(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    const result = await this.service.supplier({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        contactInfo: true,
        stateId: true,
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
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSupplier(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() data: SupplierUpdateInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.updateSupplier({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          contactInfo: true,
          stateId: true,
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
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSupplier(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.deleteSupplier({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          contactInfo: true,
          stateId: true,
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
    @common.Param() params: SupplierWhereUniqueInput
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
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        connect: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventoryItems")
  async updateInventoryItems(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        set: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventoryItems")
  async disconnectInventoryItems(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: InventoryItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryItems: {
        disconnect: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }
}
