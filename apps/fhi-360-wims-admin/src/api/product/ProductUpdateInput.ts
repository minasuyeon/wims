import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { DeliveryUpdateManyWithoutProductsInput } from "./DeliveryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  category?: string | null;
  stockLevel?: number | null;
  reorderLevel?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
  deliveries?: DeliveryUpdateManyWithoutProductsInput;
};
