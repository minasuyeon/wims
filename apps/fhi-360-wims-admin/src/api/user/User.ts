import { JsonValue } from "type-fest";
import { Role } from "../role/Role";
import { AuditTrail } from "../auditTrail/AuditTrail";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  department: string | null;
  officeLocation: string | null;
  role?: Role | null;
  auditTrails?: Array<AuditTrail>;
};
