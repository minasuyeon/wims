import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const InventoryReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="reportType"
          label="reportType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="generatedAt" source="generatedAt" />
        <TextInput label="details" multiline source="details" />
        <BooleanInput label="emailPreference" source="emailPreference" />
        <BooleanInput label="printPreference" source="printPreference" />
      </SimpleForm>
    </Create>
  );
};
