import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DeliveryTitle } from "../delivery/DeliveryTitle";
import { PredictionTitle } from "../prediction/PredictionTitle";
import { CustomAlertTitle } from "../customAlert/CustomAlertTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="registrationDate" source="registrationDate" />
        <ReferenceArrayInput
          source="deliveries"
          reference="Delivery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="predictions"
          reference="Prediction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PredictionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customAlerts"
          reference="CustomAlert"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomAlertTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
