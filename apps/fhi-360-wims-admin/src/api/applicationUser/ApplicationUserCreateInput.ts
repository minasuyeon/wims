import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type ApplicationUserCreateInput = {
  password?: string | null;
  email?: string | null;
  username?: string | null;
  role?: RoleWhereUniqueInput | null;
};
