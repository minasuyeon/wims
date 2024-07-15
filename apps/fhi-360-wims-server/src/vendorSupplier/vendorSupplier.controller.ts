import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VendorSupplierService } from "./vendorSupplier.service";
import { VendorSupplierControllerBase } from "./base/vendorSupplier.controller.base";

@swagger.ApiTags("vendorSuppliers")
@common.Controller("vendorSuppliers")
export class VendorSupplierController extends VendorSupplierControllerBase {
  constructor(protected readonly service: VendorSupplierService) {
    super(service);
  }
}
