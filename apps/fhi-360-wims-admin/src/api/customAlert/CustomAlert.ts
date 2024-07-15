import { Product } from "../product/Product";

export type CustomAlert = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  alertType?: "Option1" | null;
  active: boolean | null;
  threshold: number | null;
  product?: Product | null;
};
