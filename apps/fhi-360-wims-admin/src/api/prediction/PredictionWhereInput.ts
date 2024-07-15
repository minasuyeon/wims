import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PredictionWhereInput = {
  id?: StringFilter;
  predictionDate?: DateTimeNullableFilter;
  predictedNeed?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
};
