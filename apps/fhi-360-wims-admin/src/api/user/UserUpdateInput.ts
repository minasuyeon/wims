import { InputJsonValue } from "../../types";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { AuditTrailUpdateManyWithoutUsersInput } from "./AuditTrailUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  department?: string | null;
  officeLocation?: string | null;
  role?: RoleWhereUniqueInput | null;
  auditTrails?: AuditTrailUpdateManyWithoutUsersInput;
};
