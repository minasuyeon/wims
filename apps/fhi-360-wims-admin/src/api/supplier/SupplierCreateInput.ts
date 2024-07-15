import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  name?: string | null;
  contactDetails?: string | null;
  contractTerms?: string | null;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
};
