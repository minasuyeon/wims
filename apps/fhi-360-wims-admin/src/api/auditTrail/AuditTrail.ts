import { User } from "../user/User";

export type AuditTrail = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  action: string | null;
  timestamp: Date | null;
  details: string | null;
  user?: User | null;
};
