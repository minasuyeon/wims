import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  contactInfo?: SortOrder;
};
