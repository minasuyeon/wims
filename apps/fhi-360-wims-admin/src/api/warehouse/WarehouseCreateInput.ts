import { InventoryItemCreateNestedManyWithoutWarehousesInput } from "./InventoryItemCreateNestedManyWithoutWarehousesInput";
import { StateStoreWhereUniqueInput } from "../stateStore/StateStoreWhereUniqueInput";

export type WarehouseCreateInput = {
  name?: string | null;
  location?: string | null;
  capacity?: number | null;
  inventoryItems?: InventoryItemCreateNestedManyWithoutWarehousesInput;
  stateStore?: StateStoreWhereUniqueInput | null;
};
