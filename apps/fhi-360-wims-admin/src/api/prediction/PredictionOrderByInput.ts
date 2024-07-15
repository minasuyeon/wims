import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  predictionDate?: SortOrder;
  predictedNeed?: SortOrder;
  productId?: SortOrder;
};
