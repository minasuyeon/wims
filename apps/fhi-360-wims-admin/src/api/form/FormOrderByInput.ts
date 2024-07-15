import { SortOrder } from "../../util/SortOrder";

export type FormOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  isActive?: SortOrder;
  createdBy?: SortOrder;
  assignedTo?: SortOrder;
};
