import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";
import { ApplicationUserUpdateManyWithoutRolesInput } from "./ApplicationUserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  privileges?: InputJsonValue;
  users?: UserUpdateManyWithoutRolesInput;
  applicationUsers?: ApplicationUserUpdateManyWithoutRolesInput;
};
