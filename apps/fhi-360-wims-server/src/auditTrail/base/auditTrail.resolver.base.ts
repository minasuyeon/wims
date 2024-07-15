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
import { AuditTrail } from "./AuditTrail";
import { AuditTrailCountArgs } from "./AuditTrailCountArgs";
import { AuditTrailFindManyArgs } from "./AuditTrailFindManyArgs";
import { AuditTrailFindUniqueArgs } from "./AuditTrailFindUniqueArgs";
import { CreateAuditTrailArgs } from "./CreateAuditTrailArgs";
import { UpdateAuditTrailArgs } from "./UpdateAuditTrailArgs";
import { DeleteAuditTrailArgs } from "./DeleteAuditTrailArgs";
import { User } from "../../user/base/User";
import { AuditTrailService } from "../auditTrail.service";
@graphql.Resolver(() => AuditTrail)
export class AuditTrailResolverBase {
  constructor(protected readonly service: AuditTrailService) {}

  async _auditTrailsMeta(
    @graphql.Args() args: AuditTrailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AuditTrail])
  async auditTrails(
    @graphql.Args() args: AuditTrailFindManyArgs
  ): Promise<AuditTrail[]> {
    return this.service.auditTrails(args);
  }

  @graphql.Query(() => AuditTrail, { nullable: true })
  async auditTrail(
    @graphql.Args() args: AuditTrailFindUniqueArgs
  ): Promise<AuditTrail | null> {
    const result = await this.service.auditTrail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AuditTrail)
  async createAuditTrail(
    @graphql.Args() args: CreateAuditTrailArgs
  ): Promise<AuditTrail> {
    return await this.service.createAuditTrail({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => AuditTrail)
  async updateAuditTrail(
    @graphql.Args() args: UpdateAuditTrailArgs
  ): Promise<AuditTrail | null> {
    try {
      return await this.service.updateAuditTrail({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => AuditTrail)
  async deleteAuditTrail(
    @graphql.Args() args: DeleteAuditTrailArgs
  ): Promise<AuditTrail | null> {
    try {
      return await this.service.deleteAuditTrail(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: AuditTrail): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}