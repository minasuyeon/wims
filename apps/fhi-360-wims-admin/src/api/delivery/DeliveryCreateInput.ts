import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DeliveryCreateInput = {
  deliveredAt?: Date | null;
  details?: string | null;
  location?: LocationWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
