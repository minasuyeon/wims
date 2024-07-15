import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  contactInfo?: JsonFilter;
  stateId?: StringNullableFilter;
  inventoryItems?: InventoryItemListRelationFilter;
};
