import { InventoryReport as TInventoryReport } from "../api/inventoryReport/InventoryReport";

export const INVENTORYREPORT_TITLE_FIELD = "id";

export const InventoryReportTitle = (record: TInventoryReport): string => {
  return record.id?.toString() || String(record.id);
};
