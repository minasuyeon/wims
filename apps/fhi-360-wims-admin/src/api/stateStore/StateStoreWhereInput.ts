import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WarehouseListRelationFilter } from "../warehouse/WarehouseListRelationFilter";

export type StateStoreWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  stateId?: StringNullableFilter;
  managerId?: StringNullableFilter;
  warehouses?: WarehouseListRelationFilter;
};
