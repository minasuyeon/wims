import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { DeliveryCreateNestedManyWithoutProductsInput } from "./DeliveryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  category?: string | null;
  stockLevel?: number | null;
  reorderLevel?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
  deliveries?: DeliveryCreateNestedManyWithoutProductsInput;
};
