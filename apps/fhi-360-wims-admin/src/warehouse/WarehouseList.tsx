import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STATESTORE_TITLE_FIELD } from "../stateStore/StateStoreTitle";

export const WarehouseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Warehouses"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
