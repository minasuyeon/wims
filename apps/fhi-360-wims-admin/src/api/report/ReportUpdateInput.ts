import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  reportType?: "Option1" | null;
  period?: string | null;
  data?: InputJsonValue;
};
