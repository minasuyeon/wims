import { ProductRegistrationForm as TProductRegistrationForm } from "../api/productRegistrationForm/ProductRegistrationForm";

export const PRODUCTREGISTRATIONFORM_TITLE_FIELD = "id";

export const ProductRegistrationFormTitle = (
  record: TProductRegistrationForm
): string => {
  return record.id?.toString() || String(record.id);
};
