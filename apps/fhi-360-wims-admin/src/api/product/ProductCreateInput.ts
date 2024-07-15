import { DeliveryCreateNestedManyWithoutProductsInput } from "./DeliveryCreateNestedManyWithoutProductsInput";
import { PredictionCreateNestedManyWithoutProductsInput } from "./PredictionCreateNestedManyWithoutProductsInput";
import { CustomAlertCreateNestedManyWithoutProductsInput } from "./CustomAlertCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  registrationDate?: Date | null;
  deliveries?: DeliveryCreateNestedManyWithoutProductsInput;
  predictions?: PredictionCreateNestedManyWithoutProductsInput;
  customAlerts?: CustomAlertCreateNestedManyWithoutProductsInput;
};
