import { JsonValue } from "type-fest";
import { InventoryItem } from "../inventoryItem/InventoryItem";

export type Vendor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  contactInfo: JsonValue;
  inventoryItems?: Array<InventoryItem>;
};
