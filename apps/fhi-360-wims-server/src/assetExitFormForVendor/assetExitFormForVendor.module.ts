import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetExitFormForVendorModuleBase } from "./base/assetExitFormForVendor.module.base";
import { AssetExitFormForVendorService } from "./assetExitFormForVendor.service";
import { AssetExitFormForVendorController } from "./assetExitFormForVendor.controller";
import { AssetExitFormForVendorResolver } from "./assetExitFormForVendor.resolver";

@Module({
  imports: [AssetExitFormForVendorModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetExitFormForVendorController],
  providers: [AssetExitFormForVendorService, AssetExitFormForVendorResolver],
  exports: [AssetExitFormForVendorService],
})
export class AssetExitFormForVendorModule {}
