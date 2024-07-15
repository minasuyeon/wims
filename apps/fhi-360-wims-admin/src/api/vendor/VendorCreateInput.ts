import { InputJsonValue } from "../../types";
import { InventoryItemCreateNestedManyWithoutVendorsInput } from "./InventoryItemCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  name?: string | null;
  contactInfo?: InputJsonValue;
  inventoryItems?: InventoryItemCreateNestedManyWithoutVendorsInput;
};
