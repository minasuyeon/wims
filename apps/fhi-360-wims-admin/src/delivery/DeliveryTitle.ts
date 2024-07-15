import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "origin";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.origin?.toString() || String(record.id);
};
