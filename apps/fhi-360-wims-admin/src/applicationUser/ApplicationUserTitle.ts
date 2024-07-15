import { ApplicationUser as TApplicationUser } from "../api/applicationUser/ApplicationUser";

export const APPLICATIONUSER_TITLE_FIELD = "username";

export const ApplicationUserTitle = (record: TApplicationUser): string => {
  return record.username?.toString() || String(record.id);
};
