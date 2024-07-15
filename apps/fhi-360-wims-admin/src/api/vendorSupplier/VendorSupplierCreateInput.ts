import { InputJsonValue } from "../../types";

export type VendorSupplierCreateInput = {
  name?: string | null;
  address?: string | null;
  contactInfo?: InputJsonValue;
};
