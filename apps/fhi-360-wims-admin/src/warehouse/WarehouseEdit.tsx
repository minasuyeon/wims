import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InventoryItemTitle } from "../inventoryItem/InventoryItemTitle";
import { StateStoreTitle } from "../stateStore/StateStoreTitle";

export const WarehouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <ReferenceArrayInput
          source="inventoryItems"
          reference="InventoryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="stateStore.id"
          reference="StateStore"
          label="stateStore"
        >
          <SelectInput optionText={StateStoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
