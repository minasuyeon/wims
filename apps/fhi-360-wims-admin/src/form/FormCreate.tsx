import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const FormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="assignedTo" source="assignedTo" />
      </SimpleForm>
    </Create>
  );
};
