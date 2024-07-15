import { InputJsonValue } from "../../types";
import { InventoryItemCreateNestedManyWithoutSuppliersInput } from "./InventoryItemCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  name?: string | null;
  contactInfo?: InputJsonValue;
  stateId?: string | null;
  inventoryItems?: InventoryItemCreateNestedManyWithoutSuppliersInput;
};
