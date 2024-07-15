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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EquipmentReturnForm } from "./EquipmentReturnForm";
import { EquipmentReturnFormCountArgs } from "./EquipmentReturnFormCountArgs";
import { EquipmentReturnFormFindManyArgs } from "./EquipmentReturnFormFindManyArgs";
import { EquipmentReturnFormFindUniqueArgs } from "./EquipmentReturnFormFindUniqueArgs";
import { DeleteEquipmentReturnFormArgs } from "./DeleteEquipmentReturnFormArgs";
import { EquipmentReturnFormService } from "../equipmentReturnForm.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EquipmentReturnForm)
export class EquipmentReturnFormResolverBase {
  constructor(
    protected readonly service: EquipmentReturnFormService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EquipmentReturnForm",
    action: "read",
    possession: "any",
  })
  async _equipmentReturnFormsMeta(
    @graphql.Args() args: EquipmentReturnFormCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EquipmentReturnForm])
  @nestAccessControl.UseRoles({
    resource: "EquipmentReturnForm",
    action: "read",
    possession: "any",
  })
  async equipmentReturnForms(
    @graphql.Args() args: EquipmentReturnFormFindManyArgs
  ): Promise<EquipmentReturnForm[]> {
    return this.service.equipmentReturnForms(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EquipmentReturnForm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EquipmentReturnForm",
    action: "read",
    possession: "own",
  })
  async equipmentReturnForm(
    @graphql.Args() args: EquipmentReturnFormFindUniqueArgs
  ): Promise<EquipmentReturnForm | null> {
    const result = await this.service.equipmentReturnForm(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EquipmentReturnForm)
  @nestAccessControl.UseRoles({
    resource: "EquipmentReturnForm",
    action: "delete",
    possession: "any",
  })
  async deleteEquipmentReturnForm(
    @graphql.Args() args: DeleteEquipmentReturnFormArgs
  ): Promise<EquipmentReturnForm | null> {
    try {
      return await this.service.deleteEquipmentReturnForm(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}