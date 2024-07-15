import { EquipmentCollectionForm as TEquipmentCollectionForm } from "../api/equipmentCollectionForm/EquipmentCollectionForm";

export const EQUIPMENTCOLLECTIONFORM_TITLE_FIELD = "id";

export const EquipmentCollectionFormTitle = (
  record: TEquipmentCollectionForm
): string => {
  return record.id?.toString() || String(record.id);
};
