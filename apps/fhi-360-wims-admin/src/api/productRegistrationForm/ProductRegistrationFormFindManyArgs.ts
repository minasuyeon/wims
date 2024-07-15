import { ProductRegistrationFormWhereInput } from "./ProductRegistrationFormWhereInput";
import { ProductRegistrationFormOrderByInput } from "./ProductRegistrationFormOrderByInput";

export type ProductRegistrationFormFindManyArgs = {
  where?: ProductRegistrationFormWhereInput;
  orderBy?: Array<ProductRegistrationFormOrderByInput>;
  skip?: number;
  take?: number;
};
