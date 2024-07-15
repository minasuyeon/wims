import { Delivery } from "../delivery/Delivery";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  name: string | null;
  typeField?: "Option1" | null;
  deliveries?: Array<Delivery>;
};
