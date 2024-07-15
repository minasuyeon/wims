import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  category?: SortOrder;
  stockLevel?: SortOrder;
  reorderLevel?: SortOrder;
  supplierId?: SortOrder;
};
