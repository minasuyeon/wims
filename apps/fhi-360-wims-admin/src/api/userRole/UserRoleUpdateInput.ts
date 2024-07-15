import { InputJsonValue } from "../../types";

export type UserRoleUpdateInput = {
  privileges?: InputJsonValue;
  name?: string | null;
};
