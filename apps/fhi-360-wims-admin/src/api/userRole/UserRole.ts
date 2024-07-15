import { JsonValue } from "type-fest";

export type UserRole = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  privileges: JsonValue;
  name: string | null;
};
