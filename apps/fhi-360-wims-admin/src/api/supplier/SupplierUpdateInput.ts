import { InputJsonValue } from "../../types";
import { InventoryItemUpdateManyWithoutSuppliersInput } from "./InventoryItemUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  name?: string | null;
  contactInfo?: InputJsonValue;
  stateId?: string | null;
  inventoryItems?: InventoryItemUpdateManyWithoutSuppliersInput;
};
