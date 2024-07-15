import { EquipmentLoanForm as TEquipmentLoanForm } from "../api/equipmentLoanForm/EquipmentLoanForm";

export const EQUIPMENTLOANFORM_TITLE_FIELD = "id";

export const EquipmentLoanFormTitle = (record: TEquipmentLoanForm): string => {
  return record.id?.toString() || String(record.id);
};
