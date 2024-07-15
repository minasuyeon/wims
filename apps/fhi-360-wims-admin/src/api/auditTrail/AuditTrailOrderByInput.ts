import { SortOrder } from "../../util/SortOrder";

export type AuditTrailOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  action?: SortOrder;
  timestamp?: SortOrder;
  details?: SortOrder;
  userId?: SortOrder;
};
