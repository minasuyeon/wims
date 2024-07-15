import { ProductUpdateManyWithoutSuppliersInput } from "./ProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  name?: string | null;
  contactDetails?: string | null;
  contractTerms?: string | null;
  products?: ProductUpdateManyWithoutSuppliersInput;
};
