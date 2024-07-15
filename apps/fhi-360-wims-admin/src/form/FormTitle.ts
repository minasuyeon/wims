import { Form as TForm } from "../api/form/Form";

export const FORM_TITLE_FIELD = "typeField";

export const FormTitle = (record: TForm): string => {
  return record.typeField?.toString() || String(record.id);
};
