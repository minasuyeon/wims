import { Product } from "../product/Product";

export type Prediction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  predictionDate: Date | null;
  predictedNeed: number | null;
  product?: Product | null;
};
