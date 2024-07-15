import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  origin?: SortOrder;
  destination?: SortOrder;
  date?: SortOrder;
  productId?: SortOrder;
};
