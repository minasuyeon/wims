import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PredictionCreateInput = {
  predictionDate?: Date | null;
  predictedNeed?: number | null;
  product?: ProductWhereUniqueInput | null;
};
