import { VendorSupplierWhereInput } from "./VendorSupplierWhereInput";
import { VendorSupplierOrderByInput } from "./VendorSupplierOrderByInput";

export type VendorSupplierFindManyArgs = {
  where?: VendorSupplierWhereInput;
  orderBy?: Array<VendorSupplierOrderByInput>;
  skip?: number;
  take?: number;
};
