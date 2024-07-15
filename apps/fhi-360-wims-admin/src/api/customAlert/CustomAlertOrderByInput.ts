import { SortOrder } from "../../util/SortOrder";

export type CustomAlertOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  alertType?: SortOrder;
  active?: SortOrder;
  threshold?: SortOrder;
  productId?: SortOrder;
};
