import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const CustomAlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="alertType"
          label="alertType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="active" source="active" />
        <NumberInput step={1} label="threshold" source="threshold" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
