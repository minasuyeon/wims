import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
  category?: CategoryWhereUniqueInput;
  supplier?: SupplierWhereUniqueInput;
  vendor?: VendorWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
};
