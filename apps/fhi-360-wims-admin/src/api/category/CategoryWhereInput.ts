import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  inventoryItems?: InventoryItemListRelationFilter;
};
