import { InventoryItem } from "../inventoryItem/InventoryItem";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  inventoryItems?: Array<InventoryItem>;
};
