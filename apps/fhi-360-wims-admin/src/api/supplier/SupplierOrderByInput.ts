import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  contactDetails?: SortOrder;
  contractTerms?: SortOrder;
};
