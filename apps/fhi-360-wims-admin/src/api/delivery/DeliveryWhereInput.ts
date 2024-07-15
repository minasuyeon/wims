import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DeliveryWhereInput = {
  id?: StringFilter;
  origin?: StringNullableFilter;
  destination?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
};
