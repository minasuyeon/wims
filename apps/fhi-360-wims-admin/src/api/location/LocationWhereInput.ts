import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  deliveries?: DeliveryListRelationFilter;
};
