import { Module } from "@nestjs/common";
import { VendorSupplierModuleBase } from "./base/vendorSupplier.module.base";
import { VendorSupplierService } from "./vendorSupplier.service";
import { VendorSupplierController } from "./vendorSupplier.controller";
import { VendorSupplierResolver } from "./vendorSupplier.resolver";

@Module({
  imports: [VendorSupplierModuleBase],
  controllers: [VendorSupplierController],
  providers: [VendorSupplierService, VendorSupplierResolver],
  exports: [VendorSupplierService],
})
export class VendorSupplierModule {}
