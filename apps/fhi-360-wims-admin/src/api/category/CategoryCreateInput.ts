import { InventoryItemCreateNestedManyWithoutCategoriesInput } from "./InventoryItemCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  inventoryItems?: InventoryItemCreateNestedManyWithoutCategoriesInput;
};
