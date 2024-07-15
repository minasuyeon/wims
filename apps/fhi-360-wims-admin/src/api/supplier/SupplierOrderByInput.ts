import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  contactInfo?: SortOrder;
  stateId?: SortOrder;
};
