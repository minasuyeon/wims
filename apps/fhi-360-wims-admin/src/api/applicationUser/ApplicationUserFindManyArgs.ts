import { ApplicationUserWhereInput } from "./ApplicationUserWhereInput";
import { ApplicationUserOrderByInput } from "./ApplicationUserOrderByInput";

export type ApplicationUserFindManyArgs = {
  where?: ApplicationUserWhereInput;
  orderBy?: Array<ApplicationUserOrderByInput>;
  skip?: number;
  take?: number;
};
