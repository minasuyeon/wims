import { Delivery } from "../delivery/Delivery";
import { Prediction } from "../prediction/Prediction";
import { CustomAlert } from "../customAlert/CustomAlert";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  status?: "Option1" | null;
  registrationDate: Date | null;
  deliveries?: Array<Delivery>;
  predictions?: Array<Prediction>;
  customAlerts?: Array<CustomAlert>;
};
