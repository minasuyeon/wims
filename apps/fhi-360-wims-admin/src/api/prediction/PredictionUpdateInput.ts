import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PredictionUpdateInput = {
  predictionDate?: Date | null;
  predictedNeed?: number | null;
  product?: ProductWhereUniqueInput | null;
};
