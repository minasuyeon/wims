import * as graphql from "@nestjs/graphql";
import { InventoryReportResolverBase } from "./base/inventoryReport.resolver.base";
import { InventoryReport } from "./base/InventoryReport";
import { InventoryReportService } from "./inventoryReport.service";

@graphql.Resolver(() => InventoryReport)
export class InventoryReportResolver extends InventoryReportResolverBase {
  constructor(protected readonly service: InventoryReportService) {
    super(service);
  }
}
