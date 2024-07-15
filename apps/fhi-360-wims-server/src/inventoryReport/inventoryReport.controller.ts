import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryReportService } from "./inventoryReport.service";
import { InventoryReportControllerBase } from "./base/inventoryReport.controller.base";

@swagger.ApiTags("inventoryReports")
@common.Controller("inventoryReports")
export class InventoryReportController extends InventoryReportControllerBase {
  constructor(protected readonly service: InventoryReportService) {
    super(service);
  }
}
