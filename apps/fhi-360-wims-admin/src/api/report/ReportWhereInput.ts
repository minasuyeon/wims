import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  reportType?: "Option1";
  period?: StringNullableFilter;
  data?: JsonFilter;
};
