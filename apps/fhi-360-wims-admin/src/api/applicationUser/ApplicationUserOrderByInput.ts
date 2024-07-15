import { SortOrder } from "../../util/SortOrder";

export type ApplicationUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  username?: SortOrder;
  roleId?: SortOrder;
};
