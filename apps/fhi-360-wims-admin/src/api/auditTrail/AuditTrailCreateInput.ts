import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditTrailCreateInput = {
  action?: string | null;
  timestamp?: Date | null;
  details?: string | null;
  user?: UserWhereUniqueInput | null;
};
