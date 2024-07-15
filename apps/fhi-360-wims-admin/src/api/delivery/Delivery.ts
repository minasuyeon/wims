import { Product } from "../product/Product";

export type Delivery = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  origin: string | null;
  destination: string | null;
  date: Date | null;
  product?: Product | null;
};
