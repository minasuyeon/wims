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
import { ProductService } from "../product.service";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";
import { DeliveryFindManyArgs } from "../../delivery/base/DeliveryFindManyArgs";
import { Delivery } from "../../delivery/base/Delivery";
import { DeliveryWhereUniqueInput } from "../../delivery/base/DeliveryWhereUniqueInput";
import { PredictionFindManyArgs } from "../../prediction/base/PredictionFindManyArgs";
import { Prediction } from "../../prediction/base/Prediction";
import { PredictionWhereUniqueInput } from "../../prediction/base/PredictionWhereUniqueInput";
import { CustomAlertFindManyArgs } from "../../customAlert/base/CustomAlertFindManyArgs";
import { CustomAlert } from "../../customAlert/base/CustomAlert";
import { CustomAlertWhereUniqueInput } from "../../customAlert/base/CustomAlertWhereUniqueInput";

export class ProductControllerBase {
  constructor(protected readonly service: ProductService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        status: true,
        registrationDate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        status: true,
        registrationDate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        status: true,
        registrationDate: true,
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
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          status: true,
          registrationDate: true,
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
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          status: true,
          registrationDate: true,
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

  @common.Get("/:id/deliveries")
  @ApiNestedQuery(DeliveryFindManyArgs)
  async findDeliveries(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Delivery[]> {
    const query = plainToClass(DeliveryFindManyArgs, request.query);
    const results = await this.service.findDeliveries(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deliveredAt: true,
        details: true,

        location: {
          select: {
            id: true,
          },
        },

        product: {
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

  @common.Post("/:id/deliveries")
  async connectDeliveries(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: DeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveries: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/deliveries")
  async updateDeliveries(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: DeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveries: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/deliveries")
  async disconnectDeliveries(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: DeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliveries: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/predictions")
  @ApiNestedQuery(PredictionFindManyArgs)
  async findPredictions(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Prediction[]> {
    const query = plainToClass(PredictionFindManyArgs, request.query);
    const results = await this.service.findPredictions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        predictionDate: true,
        predictedNeed: true,

        product: {
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

  @common.Post("/:id/predictions")
  async connectPredictions(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: PredictionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predictions: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/predictions")
  async updatePredictions(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: PredictionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predictions: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/predictions")
  async disconnectPredictions(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: PredictionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predictions: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/customAlerts")
  @ApiNestedQuery(CustomAlertFindManyArgs)
  async findCustomAlerts(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<CustomAlert[]> {
    const query = plainToClass(CustomAlertFindManyArgs, request.query);
    const results = await this.service.findCustomAlerts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        alertType: true,
        active: true,
        threshold: true,

        product: {
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

  @common.Post("/:id/customAlerts")
  async connectCustomAlerts(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: CustomAlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customAlerts: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customAlerts")
  async updateCustomAlerts(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: CustomAlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customAlerts: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customAlerts")
  async disconnectCustomAlerts(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: CustomAlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customAlerts: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }
}
