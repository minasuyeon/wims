import { VendorSupplier as TVendorSupplier } from "../api/vendorSupplier/VendorSupplier";

export const VENDORSUPPLIER_TITLE_FIELD = "name";

export const VendorSupplierTitle = (record: TVendorSupplier): string => {
  return record.name?.toString() || String(record.id);
};
