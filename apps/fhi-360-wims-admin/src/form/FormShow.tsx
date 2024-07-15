import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const FormShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="assignedTo" source="assignedTo" />
      </SimpleShowLayout>
    </Show>
  );
};
