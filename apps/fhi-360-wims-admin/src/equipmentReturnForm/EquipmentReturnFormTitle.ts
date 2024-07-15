import { EquipmentReturnForm as TEquipmentReturnForm } from "../api/equipmentReturnForm/EquipmentReturnForm";

export const EQUIPMENTRETURNFORM_TITLE_FIELD = "id";

export const EquipmentReturnFormTitle = (
  record: TEquipmentReturnForm
): string => {
  return record.id?.toString() || String(record.id);
};
