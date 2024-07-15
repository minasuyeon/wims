import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const StateStoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <TextInput label="stateId" source="stateId" />
        <TextInput label="managerId" source="managerId" />
        <ReferenceArrayInput
          source="warehouses"
          reference="Warehouse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
