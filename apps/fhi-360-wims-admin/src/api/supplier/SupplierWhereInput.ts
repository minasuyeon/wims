import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  contactDetails?: StringNullableFilter;
  contractTerms?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
