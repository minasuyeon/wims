import { CustomAlert as TCustomAlert } from "../api/customAlert/CustomAlert";

export const CUSTOMALERT_TITLE_FIELD = "id";

export const CustomAlertTitle = (record: TCustomAlert): string => {
  return record.id?.toString() || String(record.id);
};
