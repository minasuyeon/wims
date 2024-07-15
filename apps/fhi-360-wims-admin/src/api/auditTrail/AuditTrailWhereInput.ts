import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditTrailWhereInput = {
  id?: StringFilter;
  action?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
