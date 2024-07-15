import { Location } from "../location/Location";
import { Product } from "../product/Product";

export type Delivery = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deliveredAt: Date | null;
  details: string | null;
  location?: Location | null;
  product?: Product | null;
};
