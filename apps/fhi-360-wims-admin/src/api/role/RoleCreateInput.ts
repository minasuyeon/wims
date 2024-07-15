import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";
import { ApplicationUserCreateNestedManyWithoutRolesInput } from "./ApplicationUserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  privileges?: InputJsonValue;
  users?: UserCreateNestedManyWithoutRolesInput;
  applicationUsers?: ApplicationUserCreateNestedManyWithoutRolesInput;
};
