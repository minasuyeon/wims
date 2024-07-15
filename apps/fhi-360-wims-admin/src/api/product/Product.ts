import { Supplier } from "../supplier/Supplier";
import { Delivery } from "../delivery/Delivery";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  category: string | null;
  stockLevel: number | null;
  reorderLevel: number | null;
  supplier?: Supplier | null;
  deliveries?: Array<Delivery>;
};
