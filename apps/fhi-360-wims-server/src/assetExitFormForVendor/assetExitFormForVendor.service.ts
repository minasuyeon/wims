import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetExitFormForVendorServiceBase } from "./base/assetExitFormForVendor.service.base";

@Injectable()
export class AssetExitFormForVendorService extends AssetExitFormForVendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
