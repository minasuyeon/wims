import { AuditTrail as TAuditTrail } from "../api/auditTrail/AuditTrail";

export const AUDITTRAIL_TITLE_FIELD = "action";

export const AuditTrailTitle = (record: TAuditTrail): string => {
  return record.action?.toString() || String(record.id);
};
