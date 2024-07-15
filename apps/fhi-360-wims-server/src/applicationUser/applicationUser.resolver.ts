import * as graphql from "@nestjs/graphql";
import { ApplicationUserResolverBase } from "./base/applicationUser.resolver.base";
import { ApplicationUser } from "./base/ApplicationUser";
import { ApplicationUserService } from "./applicationUser.service";

@graphql.Resolver(() => ApplicationUser)
export class ApplicationUserResolver extends ApplicationUserResolverBase {
  constructor(protected readonly service: ApplicationUserService) {
    super(service);
  }
}
