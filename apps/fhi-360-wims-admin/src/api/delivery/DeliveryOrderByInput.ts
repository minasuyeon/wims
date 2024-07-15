import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deliveredAt?: SortOrder;
  details?: SortOrder;
  locationId?: SortOrder;
  productId?: SortOrder;
};
