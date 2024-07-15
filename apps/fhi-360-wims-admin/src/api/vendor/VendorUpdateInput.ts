import { InputJsonValue } from "../../types";
import { InventoryItemUpdateManyWithoutVendorsInput } from "./InventoryItemUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  name?: string | null;
  contactInfo?: InputJsonValue;
  inventoryItems?: InventoryItemUpdateManyWithoutVendorsInput;
};
