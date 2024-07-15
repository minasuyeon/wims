import { SortOrder } from "../../util/SortOrder";

export type StateStoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  stateId?: SortOrder;
  managerId?: SortOrder;
};
