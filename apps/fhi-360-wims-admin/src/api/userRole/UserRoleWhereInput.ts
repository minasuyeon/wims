import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserRoleWhereInput = {
  id?: StringFilter;
  privileges?: JsonFilter;
  name?: StringNullableFilter;
};
