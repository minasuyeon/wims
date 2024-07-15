import { JsonValue } from "type-fest";
import { InventoryItem } from "../inventoryItem/InventoryItem";

export type Supplier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  contactInfo: JsonValue;
  stateId: string | null;
  inventoryItems?: Array<InventoryItem>;
};
