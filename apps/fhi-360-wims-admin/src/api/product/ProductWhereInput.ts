import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { PredictionListRelationFilter } from "../prediction/PredictionListRelationFilter";
import { CustomAlertListRelationFilter } from "../customAlert/CustomAlertListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  registrationDate?: DateTimeNullableFilter;
  deliveries?: DeliveryListRelationFilter;
  predictions?: PredictionListRelationFilter;
  customAlerts?: CustomAlertListRelationFilter;
};
