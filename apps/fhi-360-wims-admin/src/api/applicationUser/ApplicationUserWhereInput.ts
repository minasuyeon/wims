import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type ApplicationUserWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  email?: StringNullableFilter;
  username?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
