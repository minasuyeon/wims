import { DeliveryCreateNestedManyWithoutLocationsInput } from "./DeliveryCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
  deliveries?: DeliveryCreateNestedManyWithoutLocationsInput;
};
