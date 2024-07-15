import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const FormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="assignedTo" source="assignedTo" />
      </SimpleForm>
    </Edit>
  );
};
