import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const InventoryReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reportType" source="reportType" />
        <TextField label="generatedAt" source="generatedAt" />
        <TextField label="details" source="details" />
        <BooleanField label="emailPreference" source="emailPreference" />
        <BooleanField label="printPreference" source="printPreference" />
      </SimpleShowLayout>
    </Show>
  );
};
