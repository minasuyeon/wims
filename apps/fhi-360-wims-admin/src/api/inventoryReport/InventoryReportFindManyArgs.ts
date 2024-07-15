import { InventoryReportWhereInput } from "./InventoryReportWhereInput";
import { InventoryReportOrderByInput } from "./InventoryReportOrderByInput";

export type InventoryReportFindManyArgs = {
  where?: InventoryReportWhereInput;
  orderBy?: Array<InventoryReportOrderByInput>;
  skip?: number;
  take?: number;
};
