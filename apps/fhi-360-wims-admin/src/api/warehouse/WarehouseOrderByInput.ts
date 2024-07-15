import { SortOrder } from "../../util/SortOrder";

export type WarehouseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  capacity?: SortOrder;
  stateStoreId?: SortOrder;
};
