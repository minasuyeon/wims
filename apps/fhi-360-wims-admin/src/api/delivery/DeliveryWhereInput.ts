import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DeliveryWhereInput = {
  id?: StringFilter;
  deliveredAt?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
