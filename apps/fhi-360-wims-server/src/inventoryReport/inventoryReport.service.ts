import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryReportServiceBase } from "./base/inventoryReport.service.base";

@Injectable()
export class InventoryReportService extends InventoryReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
