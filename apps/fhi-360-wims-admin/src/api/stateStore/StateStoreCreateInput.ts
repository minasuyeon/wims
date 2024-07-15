import { WarehouseCreateNestedManyWithoutStateStoresInput } from "./WarehouseCreateNestedManyWithoutStateStoresInput";

export type StateStoreCreateInput = {
  location?: string | null;
  stateId?: string | null;
  managerId?: string | null;
  warehouses?: WarehouseCreateNestedManyWithoutStateStoresInput;
};
