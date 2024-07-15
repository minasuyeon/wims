import * as graphql from "@nestjs/graphql";
import { Privilege } from "../userManagement/Privilege";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Mutation(() => String)
  async AssignPrivilege(
    @graphql.Args()
    args: Privilege
  ): Promise<string> {
    return this.service.AssignPrivilege(args);
  }

  @graphql.Mutation(() => String)
  async CreateUserRole(
    @graphql.Args()
    args: Privilege
  ): Promise<string> {
    return this.service.CreateUserRole(args);
  }
}
