import { InventoryItem } from "../inventoryItem/InventoryItem";
import { StateStore } from "../stateStore/StateStore";

export type Warehouse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  capacity: number | null;
  inventoryItems?: Array<InventoryItem>;
  stateStore?: StateStore | null;
};
