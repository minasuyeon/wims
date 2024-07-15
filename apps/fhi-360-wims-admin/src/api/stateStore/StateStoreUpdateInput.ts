import { WarehouseUpdateManyWithoutStateStoresInput } from "./WarehouseUpdateManyWithoutStateStoresInput";

export type StateStoreUpdateInput = {
  location?: string | null;
  stateId?: string | null;
  managerId?: string | null;
  warehouses?: WarehouseUpdateManyWithoutStateStoresInput;
};
