import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DeliveryUpdateInput = {
  deliveredAt?: Date | null;
  details?: string | null;
  location?: LocationWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
