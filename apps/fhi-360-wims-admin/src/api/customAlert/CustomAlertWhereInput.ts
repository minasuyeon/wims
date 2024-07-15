import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomAlertWhereInput = {
  id?: StringFilter;
  alertType?: "Option1";
  active?: BooleanNullableFilter;
  threshold?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
};
