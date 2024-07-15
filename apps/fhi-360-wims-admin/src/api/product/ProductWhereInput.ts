import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  category?: StringNullableFilter;
  stockLevel?: IntNullableFilter;
  reorderLevel?: IntNullableFilter;
  supplier?: SupplierWhereUniqueInput;
  deliveries?: DeliveryListRelationFilter;
};
