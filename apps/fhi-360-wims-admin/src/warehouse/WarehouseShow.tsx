import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";
import { WAREHOUSE_TITLE_FIELD } from "./WarehouseTitle";
import { STATESTORE_TITLE_FIELD } from "../stateStore/StateStoreTitle";

export const WarehouseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="InventoryItem"
          target="warehouseId"
          label="InventoryItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="quantity" source="quantity" />
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="vendor"
              source="vendor.id"
              reference="Vendor"
            >
              <TextField source={VENDOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
