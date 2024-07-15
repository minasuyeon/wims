import { JsonValue } from "type-fest";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reportType?: "Option1" | null;
  period: string | null;
  data: JsonValue;
};
