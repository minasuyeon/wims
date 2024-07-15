import { StateStore as TStateStore } from "../api/stateStore/StateStore";

export const STATESTORE_TITLE_FIELD = "location";

export const StateStoreTitle = (record: TStateStore): string => {
  return record.location?.toString() || String(record.id);
};
