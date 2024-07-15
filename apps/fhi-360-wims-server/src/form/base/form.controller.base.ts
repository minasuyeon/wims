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
import { FormService } from "../form.service";
import { FormCreateInput } from "./FormCreateInput";
import { Form } from "./Form";
import { FormFindManyArgs } from "./FormFindManyArgs";
import { FormWhereUniqueInput } from "./FormWhereUniqueInput";
import { FormUpdateInput } from "./FormUpdateInput";

export class FormControllerBase {
  constructor(protected readonly service: FormService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Form })
  async createForm(@common.Body() data: FormCreateInput): Promise<Form> {
    return await this.service.createForm({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        typeField: true,
        isActive: true,
        createdBy: true,
        assignedTo: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Form] })
  @ApiNestedQuery(FormFindManyArgs)
  async forms(@common.Req() request: Request): Promise<Form[]> {
    const args = plainToClass(FormFindManyArgs, request.query);
    return this.service.forms({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        typeField: true,
        isActive: true,
        createdBy: true,
        assignedTo: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async form(
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Form | null> {
    const result = await this.service.form({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        typeField: true,
        isActive: true,
        createdBy: true,
        assignedTo: true,
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
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateForm(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() data: FormUpdateInput
  ): Promise<Form | null> {
    try {
      return await this.service.updateForm({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          typeField: true,
          isActive: true,
          createdBy: true,
          assignedTo: true,
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
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteForm(
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Form | null> {
    try {
      return await this.service.deleteForm({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          typeField: true,
          isActive: true,
          createdBy: true,
          assignedTo: true,
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
}
