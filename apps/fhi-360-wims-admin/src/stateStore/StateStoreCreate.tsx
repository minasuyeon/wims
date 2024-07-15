import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StateStoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="stockLevel" source="stockLevel" />
      </SimpleForm>
    </Create>
  );
};
