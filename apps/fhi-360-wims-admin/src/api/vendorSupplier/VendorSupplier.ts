import { JsonValue } from "type-fest";

export type VendorSupplier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  contactInfo: JsonValue;
};
