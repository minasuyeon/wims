import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type InventoryReportWhereInput = {
  id?: StringFilter;
  reportType?: "Option1";
  generatedAt?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  emailPreference?: BooleanNullableFilter;
  printPreference?: BooleanNullableFilter;
};
