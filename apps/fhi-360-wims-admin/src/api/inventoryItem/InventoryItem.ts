import { Category } from "../category/Category";
import { Supplier } from "../supplier/Supplier";
import { Vendor } from "../vendor/Vendor";
import { Warehouse } from "../warehouse/Warehouse";

export type InventoryItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  quantity: number | null;
  category?: Category | null;
  supplier?: Supplier | null;
  vendor?: Vendor | null;
  warehouse?: Warehouse | null;
};
