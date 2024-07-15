import { Warehouse } from "../warehouse/Warehouse";

export type StateStore = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  location: string | null;
  stateId: string | null;
  managerId: string | null;
  warehouses?: Array<Warehouse>;
};
