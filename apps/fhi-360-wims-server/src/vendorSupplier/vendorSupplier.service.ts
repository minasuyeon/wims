import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VendorSupplierServiceBase } from "./base/vendorSupplier.service.base";

@Injectable()
export class VendorSupplierService extends VendorSupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
