import { Role } from "../role/Role";

export type ApplicationUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  password: string | null;
  email: string | null;
  username: string | null;
  role?: Role | null;
};
