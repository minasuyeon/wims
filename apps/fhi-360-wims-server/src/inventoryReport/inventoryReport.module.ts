import { Module } from "@nestjs/common";
import { InventoryReportModuleBase } from "./base/inventoryReport.module.base";
import { InventoryReportService } from "./inventoryReport.service";
import { InventoryReportController } from "./inventoryReport.controller";
import { InventoryReportResolver } from "./inventoryReport.resolver";

@Module({
  imports: [InventoryReportModuleBase],
  controllers: [InventoryReportController],
  providers: [InventoryReportService, InventoryReportResolver],
  exports: [InventoryReportService],
})
export class InventoryReportModule {}
