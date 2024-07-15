import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FormWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  createdBy?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
};
