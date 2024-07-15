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
import { UserRoleService } from "../userRole.service";
import { UserRoleCreateInput } from "./UserRoleCreateInput";
import { UserRole } from "./UserRole";
import { UserRoleFindManyArgs } from "./UserRoleFindManyArgs";
import { UserRoleWhereUniqueInput } from "./UserRoleWhereUniqueInput";
import { UserRoleUpdateInput } from "./UserRoleUpdateInput";

export class UserRoleControllerBase {
  constructor(protected readonly service: UserRoleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserRole })
  async createUserRole(
    @common.Body() data: UserRoleCreateInput
  ): Promise<UserRole> {
    return await this.service.createUserRole({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        privileges: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserRole] })
  @ApiNestedQuery(UserRoleFindManyArgs)
  async userRoles(@common.Req() request: Request): Promise<UserRole[]> {
    const args = plainToClass(UserRoleFindManyArgs, request.query);
    return this.service.userRoles({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        privileges: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userRole(
    @common.Param() params: UserRoleWhereUniqueInput
  ): Promise<UserRole | null> {
    const result = await this.service.userRole({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        privileges: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: UserRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserRole(
    @common.Param() params: UserRoleWhereUniqueInput,
    @common.Body() data: UserRoleUpdateInput
  ): Promise<UserRole | null> {
    try {
      return await this.service.updateUserRole({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          privileges: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: UserRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserRole(
    @common.Param() params: UserRoleWhereUniqueInput
  ): Promise<UserRole | null> {
    try {
      return await this.service.deleteUserRole({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          privileges: true,
          name: true,
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
