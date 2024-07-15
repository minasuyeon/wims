import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DeliveryUpdateInput = {
  origin?: string | null;
  destination?: string | null;
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
};
