import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VendorSupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" source="address" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
