import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductRegistrationFormResolverBase } from "./base/productRegistrationForm.resolver.base";
import { ProductRegistrationForm } from "./base/ProductRegistrationForm";
import { ProductRegistrationFormService } from "./productRegistrationForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductRegistrationForm)
export class ProductRegistrationFormResolver extends ProductRegistrationFormResolverBase {
  constructor(
    protected readonly service: ProductRegistrationFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
