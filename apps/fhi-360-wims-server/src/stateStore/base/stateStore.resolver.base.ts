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
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { StateStore } from "./StateStore";
import { StateStoreCountArgs } from "./StateStoreCountArgs";
import { StateStoreFindManyArgs } from "./StateStoreFindManyArgs";
import { StateStoreFindUniqueArgs } from "./StateStoreFindUniqueArgs";
import { CreateStateStoreArgs } from "./CreateStateStoreArgs";
import { UpdateStateStoreArgs } from "./UpdateStateStoreArgs";
import { DeleteStateStoreArgs } from "./DeleteStateStoreArgs";
import { StateStoreService } from "../stateStore.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StateStore)
export class StateStoreResolverBase {
  constructor(
    protected readonly service: StateStoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "StateStore",
    action: "read",
    possession: "any",
  })
  async _stateStoresMeta(
    @graphql.Args() args: StateStoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [StateStore])
  @nestAccessControl.UseRoles({
    resource: "StateStore",
    action: "read",
    possession: "any",
  })
  async stateStores(
    @graphql.Args() args: StateStoreFindManyArgs
  ): Promise<StateStore[]> {
    return this.service.stateStores(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => StateStore, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "StateStore",
    action: "read",
    possession: "own",
  })
  async stateStore(
    @graphql.Args() args: StateStoreFindUniqueArgs
  ): Promise<StateStore | null> {
    const result = await this.service.stateStore(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StateStore)
  @nestAccessControl.UseRoles({
    resource: "StateStore",
    action: "create",
    possession: "any",
  })
  async createStateStore(
    @graphql.Args() args: CreateStateStoreArgs
  ): Promise<StateStore> {
    return await this.service.createStateStore({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StateStore)
  @nestAccessControl.UseRoles({
    resource: "StateStore",
    action: "update",
    possession: "any",
  })
  async updateStateStore(
    @graphql.Args() args: UpdateStateStoreArgs
  ): Promise<StateStore | null> {
    try {
      return await this.service.updateStateStore({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => StateStore)
  @nestAccessControl.UseRoles({
    resource: "StateStore",
    action: "delete",
    possession: "any",
  })
  async deleteStateStore(
    @graphql.Args() args: DeleteStateStoreArgs
  ): Promise<StateStore | null> {
    try {
      return await this.service.deleteStateStore(args);
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