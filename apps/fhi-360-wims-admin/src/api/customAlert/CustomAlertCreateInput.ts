import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomAlertCreateInput = {
  alertType?: "Option1" | null;
  active?: boolean | null;
  threshold?: number | null;
  product?: ProductWhereUniqueInput | null;
};
