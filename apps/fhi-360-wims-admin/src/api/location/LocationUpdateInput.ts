import { DeliveryUpdateManyWithoutLocationsInput } from "./DeliveryUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
  deliveries?: DeliveryUpdateManyWithoutLocationsInput;
};
