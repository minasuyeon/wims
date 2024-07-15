import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InventoryItemList } from "./inventoryItem/InventoryItemList";
import { InventoryItemCreate } from "./inventoryItem/InventoryItemCreate";
import { InventoryItemEdit } from "./inventoryItem/InventoryItemEdit";
import { InventoryItemShow } from "./inventoryItem/InventoryItemShow";
import { WarehouseList } from "./warehouse/WarehouseList";
import { WarehouseCreate } from "./warehouse/WarehouseCreate";
import { WarehouseEdit } from "./warehouse/WarehouseEdit";
import { WarehouseShow } from "./warehouse/WarehouseShow";
import { FormList } from "./form/FormList";
import { FormCreate } from "./form/FormCreate";
import { FormEdit } from "./form/FormEdit";
import { FormShow } from "./form/FormShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { VendorList } from "./vendor/VendorList";
import { VendorCreate } from "./vendor/VendorCreate";
import { VendorEdit } from "./vendor/VendorEdit";
import { VendorShow } from "./vendor/VendorShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { StateStoreList } from "./stateStore/StateStoreList";
import { StateStoreCreate } from "./stateStore/StateStoreCreate";
import { StateStoreEdit } from "./stateStore/StateStoreEdit";
import { StateStoreShow } from "./stateStore/StateStoreShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { PredictionList } from "./prediction/PredictionList";
import { PredictionCreate } from "./prediction/PredictionCreate";
import { PredictionEdit } from "./prediction/PredictionEdit";
import { PredictionShow } from "./prediction/PredictionShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CustomAlertList } from "./customAlert/CustomAlertList";
import { CustomAlertCreate } from "./customAlert/CustomAlertCreate";
import { CustomAlertEdit } from "./customAlert/CustomAlertEdit";
import { CustomAlertShow } from "./customAlert/CustomAlertShow";
import { AuditTrailList } from "./auditTrail/AuditTrailList";
import { AuditTrailCreate } from "./auditTrail/AuditTrailCreate";
import { AuditTrailEdit } from "./auditTrail/AuditTrailEdit";
import { AuditTrailShow } from "./auditTrail/AuditTrailShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { InventoryReportList } from "./inventoryReport/InventoryReportList";
import { InventoryReportCreate } from "./inventoryReport/InventoryReportCreate";
import { InventoryReportEdit } from "./inventoryReport/InventoryReportEdit";
import { InventoryReportShow } from "./inventoryReport/InventoryReportShow";
import { VendorSupplierList } from "./vendorSupplier/VendorSupplierList";
import { VendorSupplierCreate } from "./vendorSupplier/VendorSupplierCreate";
import { VendorSupplierEdit } from "./vendorSupplier/VendorSupplierEdit";
import { VendorSupplierShow } from "./vendorSupplier/VendorSupplierShow";
import { ApplicationUserList } from "./applicationUser/ApplicationUserList";
import { ApplicationUserCreate } from "./applicationUser/ApplicationUserCreate";
import { ApplicationUserEdit } from "./applicationUser/ApplicationUserEdit";
import { ApplicationUserShow } from "./applicationUser/ApplicationUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FHI360 WIMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InventoryItem"
          list={InventoryItemList}
          edit={InventoryItemEdit}
          create={InventoryItemCreate}
          show={InventoryItemShow}
        />
        <Resource
          name="Warehouse"
          list={WarehouseList}
          edit={WarehouseEdit}
          create={WarehouseCreate}
          show={WarehouseShow}
        />
        <Resource
          name="Form"
          list={FormList}
          edit={FormEdit}
          create={FormCreate}
          show={FormShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Vendor"
          list={VendorList}
          edit={VendorEdit}
          create={VendorCreate}
          show={VendorShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="StateStore"
          list={StateStoreList}
          edit={StateStoreEdit}
          create={StateStoreCreate}
          show={StateStoreShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Prediction"
          list={PredictionList}
          edit={PredictionEdit}
          create={PredictionCreate}
          show={PredictionShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="CustomAlert"
          list={CustomAlertList}
          edit={CustomAlertEdit}
          create={CustomAlertCreate}
          show={CustomAlertShow}
        />
        <Resource
          name="AuditTrail"
          list={AuditTrailList}
          edit={AuditTrailEdit}
          create={AuditTrailCreate}
          show={AuditTrailShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="InventoryReport"
          list={InventoryReportList}
          edit={InventoryReportEdit}
          create={InventoryReportCreate}
          show={InventoryReportShow}
        />
        <Resource
          name="VendorSupplier"
          list={VendorSupplierList}
          edit={VendorSupplierEdit}
          create={VendorSupplierCreate}
          show={VendorSupplierShow}
        />
        <Resource
          name="ApplicationUser"
          list={ApplicationUserList}
          edit={ApplicationUserEdit}
          create={ApplicationUserCreate}
          show={ApplicationUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
