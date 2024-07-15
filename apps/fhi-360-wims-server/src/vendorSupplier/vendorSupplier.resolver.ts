import * as graphql from "@nestjs/graphql";
import { VendorSupplierResolverBase } from "./base/vendorSupplier.resolver.base";
import { VendorSupplier } from "./base/VendorSupplier";
import { VendorSupplierService } from "./vendorSupplier.service";

@graphql.Resolver(() => VendorSupplier)
export class VendorSupplierResolver extends VendorSupplierResolverBase {
  constructor(protected readonly service: VendorSupplierService) {
    super(service);
  }
}
