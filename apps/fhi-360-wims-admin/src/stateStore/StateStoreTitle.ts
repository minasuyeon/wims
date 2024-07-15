import { StateStore as TStateStore } from "../api/stateStore/StateStore";

export const STATESTORE_TITLE_FIELD = "name";

export const StateStoreTitle = (record: TStateStore): string => {
  return record.name?.toString() || String(record.id);
};
