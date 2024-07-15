import { InputJsonValue } from "../../types";

export type UserRoleCreateInput = {
  privileges?: InputJsonValue;
  name?: string | null;
};
