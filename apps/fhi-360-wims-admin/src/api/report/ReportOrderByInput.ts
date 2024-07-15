import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reportType?: SortOrder;
  period?: SortOrder;
  data?: SortOrder;
};
