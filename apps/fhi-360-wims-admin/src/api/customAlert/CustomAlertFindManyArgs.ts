import { CustomAlertWhereInput } from "./CustomAlertWhereInput";
import { CustomAlertOrderByInput } from "./CustomAlertOrderByInput";

export type CustomAlertFindManyArgs = {
  where?: CustomAlertWhereInput;
  orderBy?: Array<CustomAlertOrderByInput>;
  skip?: number;
  take?: number;
};
