import { AuditTrailWhereInput } from "./AuditTrailWhereInput";
import { AuditTrailOrderByInput } from "./AuditTrailOrderByInput";

export type AuditTrailFindManyArgs = {
  where?: AuditTrailWhereInput;
  orderBy?: Array<AuditTrailOrderByInput>;
  skip?: number;
  take?: number;
};
