import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type ApplicationUserUpdateInput = {
  password?: string | null;
  email?: string | null;
  username?: string | null;
  role?: RoleWhereUniqueInput | null;
};
