import { Product } from "../product/Product";

export type Supplier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  contactDetails: string | null;
  contractTerms: string | null;
  products?: Array<Product>;
};
