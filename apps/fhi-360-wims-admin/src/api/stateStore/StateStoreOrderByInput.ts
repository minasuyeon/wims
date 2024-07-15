import { SortOrder } from "../../util/SortOrder";

export type StateStoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  stockLevel?: SortOrder;
};
