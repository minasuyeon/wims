import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STATESTORE_TITLE_FIELD } from "./StateStoreTitle";

export const StateStoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="location" source="location" />
        <TextField label="stateId" source="stateId" />
        <TextField label="managerId" source="managerId" />
        <ReferenceManyField
          reference="Warehouse"
          target="stateStoreId"
          label="Warehouses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="location" source="location" />
            <TextField label="capacity" source="capacity" />
            <ReferenceField
              label="stateStore"
              source="statestore.id"
              reference="StateStore"
            >
              <TextField source={STATESTORE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
