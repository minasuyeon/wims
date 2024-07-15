import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetExitFormForVendorService } from "./assetExitFormForVendor.service";
import { AssetExitFormForVendorControllerBase } from "./base/assetExitFormForVendor.controller.base";

@swagger.ApiTags("assetExitFormForVendors")
@common.Controller("assetExitFormForVendors")
export class AssetExitFormForVendorController extends AssetExitFormForVendorControllerBase {
  constructor(
    protected readonly service: AssetExitFormForVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
