import { InventoryItemUpdateManyWithoutCategoriesInput } from "./InventoryItemUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  inventoryItems?: InventoryItemUpdateManyWithoutCategoriesInput;
};
