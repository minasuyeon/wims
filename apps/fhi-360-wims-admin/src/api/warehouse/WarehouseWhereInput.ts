import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { StateStoreWhereUniqueInput } from "../stateStore/StateStoreWhereUniqueInput";

export type WarehouseWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  capacity?: IntNullableFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  stateStore?: StateStoreWhereUniqueInput;
};
