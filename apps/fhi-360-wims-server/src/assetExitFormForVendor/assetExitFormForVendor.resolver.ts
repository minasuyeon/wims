import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetExitFormForVendorResolverBase } from "./base/assetExitFormForVendor.resolver.base";
import { AssetExitFormForVendor } from "./base/AssetExitFormForVendor";
import { AssetExitFormForVendorService } from "./assetExitFormForVendor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetExitFormForVendor)
export class AssetExitFormForVendorResolver extends AssetExitFormForVendorResolverBase {
  constructor(
    protected readonly service: AssetExitFormForVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
