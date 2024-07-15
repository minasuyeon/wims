import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  reportType?: "Option1" | null;
  period?: string | null;
  data?: InputJsonValue;
};
