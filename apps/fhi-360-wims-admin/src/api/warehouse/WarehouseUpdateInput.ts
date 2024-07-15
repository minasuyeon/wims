import { InventoryItemUpdateManyWithoutWarehousesInput } from "./InventoryItemUpdateManyWithoutWarehousesInput";
import { StateStoreWhereUniqueInput } from "../stateStore/StateStoreWhereUniqueInput";

export type WarehouseUpdateInput = {
  name?: string | null;
  location?: string | null;
  capacity?: number | null;
  inventoryItems?: InventoryItemUpdateManyWithoutWarehousesInput;
  stateStore?: StateStoreWhereUniqueInput | null;
};
