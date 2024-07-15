import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { ApplicationUserListRelationFilter } from "../applicationUser/ApplicationUserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  privileges?: JsonFilter;
  users?: UserListRelationFilter;
  applicationUsers?: ApplicationUserListRelationFilter;
};
