import { StateStoreWhereInput } from "./StateStoreWhereInput";
import { StateStoreOrderByInput } from "./StateStoreOrderByInput";

export type StateStoreFindManyArgs = {
  where?: StateStoreWhereInput;
  orderBy?: Array<StateStoreOrderByInput>;
  skip?: number;
  take?: number;
};
