import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { AuditTrailListRelationFilter } from "../auditTrail/AuditTrailListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  department?: StringNullableFilter;
  officeLocation?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  auditTrails?: AuditTrailListRelationFilter;
};
