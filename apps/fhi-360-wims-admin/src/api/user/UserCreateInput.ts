import { InputJsonValue } from "../../types";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { AuditTrailCreateNestedManyWithoutUsersInput } from "./AuditTrailCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  department?: string | null;
  officeLocation?: string | null;
  role?: RoleWhereUniqueInput | null;
  auditTrails?: AuditTrailCreateNestedManyWithoutUsersInput;
};
