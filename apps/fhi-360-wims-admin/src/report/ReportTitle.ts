import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "period";

export const ReportTitle = (record: TReport): string => {
  return record.period?.toString() || String(record.id);
};
