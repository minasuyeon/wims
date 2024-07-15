import { DeliveryUpdateManyWithoutProductsInput } from "./DeliveryUpdateManyWithoutProductsInput";
import { PredictionUpdateManyWithoutProductsInput } from "./PredictionUpdateManyWithoutProductsInput";
import { CustomAlertUpdateManyWithoutProductsInput } from "./CustomAlertUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  registrationDate?: Date | null;
  deliveries?: DeliveryUpdateManyWithoutProductsInput;
  predictions?: PredictionUpdateManyWithoutProductsInput;
  customAlerts?: CustomAlertUpdateManyWithoutProductsInput;
};
