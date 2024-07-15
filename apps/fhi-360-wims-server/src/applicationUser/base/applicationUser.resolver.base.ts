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
import { ApplicationUser } from "./ApplicationUser";
import { ApplicationUserCountArgs } from "./ApplicationUserCountArgs";
import { ApplicationUserFindManyArgs } from "./ApplicationUserFindManyArgs";
import { ApplicationUserFindUniqueArgs } from "./ApplicationUserFindUniqueArgs";
import { CreateApplicationUserArgs } from "./CreateApplicationUserArgs";
import { UpdateApplicationUserArgs } from "./UpdateApplicationUserArgs";
import { DeleteApplicationUserArgs } from "./DeleteApplicationUserArgs";
import { Role } from "../../role/base/Role";
import { ApplicationUserService } from "../applicationUser.service";
@graphql.Resolver(() => ApplicationUser)
export class ApplicationUserResolverBase {
  constructor(protected readonly service: ApplicationUserService) {}

  async _applicationUsersMeta(
    @graphql.Args() args: ApplicationUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApplicationUser])
  async applicationUsers(
    @graphql.Args() args: ApplicationUserFindManyArgs
  ): Promise<ApplicationUser[]> {
    return this.service.applicationUsers(args);
  }

  @graphql.Query(() => ApplicationUser, { nullable: true })
  async applicationUser(
    @graphql.Args() args: ApplicationUserFindUniqueArgs
  ): Promise<ApplicationUser | null> {
    const result = await this.service.applicationUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApplicationUser)
  async createApplicationUser(
    @graphql.Args() args: CreateApplicationUserArgs
  ): Promise<ApplicationUser> {
    return await this.service.createApplicationUser({
      ...args,
      data: {
        ...args.data,

        role: args.data.role
          ? {
              connect: args.data.role,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ApplicationUser)
  async updateApplicationUser(
    @graphql.Args() args: UpdateApplicationUserArgs
  ): Promise<ApplicationUser | null> {
    try {
      return await this.service.updateApplicationUser({
        ...args,
        data: {
          ...args.data,

          role: args.data.role
            ? {
                connect: args.data.role,
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

  @graphql.Mutation(() => ApplicationUser)
  async deleteApplicationUser(
    @graphql.Args() args: DeleteApplicationUserArgs
  ): Promise<ApplicationUser | null> {
    try {
      return await this.service.deleteApplicationUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Role, {
    nullable: true,
    name: "role",
  })
  async getRole(
    @graphql.Parent() parent: ApplicationUser
  ): Promise<Role | null> {
    const result = await this.service.getRole(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}