import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomAlertUpdateInput = {
  alertType?: "Option1" | null;
  active?: boolean | null;
  threshold?: number | null;
  product?: ProductWhereUniqueInput | null;
};
