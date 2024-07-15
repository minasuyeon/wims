import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
};
