import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  categoryId?: SortOrder;
  supplierId?: SortOrder;
  vendorId?: SortOrder;
  warehouseId?: SortOrder;
};
