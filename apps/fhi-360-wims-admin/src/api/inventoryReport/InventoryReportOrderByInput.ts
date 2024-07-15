import { SortOrder } from "../../util/SortOrder";

export type InventoryReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reportType?: SortOrder;
  generatedAt?: SortOrder;
  details?: SortOrder;
  emailPreference?: SortOrder;
  printPreference?: SortOrder;
};
