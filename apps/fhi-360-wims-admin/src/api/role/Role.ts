import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { ApplicationUser } from "../applicationUser/ApplicationUser";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  privileges: JsonValue;
  users?: Array<User>;
  applicationUsers?: Array<ApplicationUser>;
};
