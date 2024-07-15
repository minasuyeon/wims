import { InputJsonValue } from "../../types";

export type VendorSupplierUpdateInput = {
  name?: string | null;
  address?: string | null;
  contactInfo?: InputJsonValue;
};
