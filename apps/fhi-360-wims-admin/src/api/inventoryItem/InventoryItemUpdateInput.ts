import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryItemUpdateInput = {
  name?: string | null;
  quantity?: number | null;
  category?: CategoryWhereUniqueInput | null;
  supplier?: SupplierWhereUniqueInput | null;
  vendor?: VendorWhereUniqueInput | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
