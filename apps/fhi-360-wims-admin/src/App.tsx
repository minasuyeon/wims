import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { StateStoreList } from "./stateStore/StateStoreList";
import { StateStoreCreate } from "./stateStore/StateStoreCreate";
import { StateStoreEdit } from "./stateStore/StateStoreEdit";
import { StateStoreShow } from "./stateStore/StateStoreShow";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EquipmentReturnFormList } from "./equipmentReturnForm/EquipmentReturnFormList";
import { EquipmentReturnFormCreate } from "./equipmentReturnForm/EquipmentReturnFormCreate";
import { EquipmentReturnFormEdit } from "./equipmentReturnForm/EquipmentReturnFormEdit";
import { EquipmentReturnFormShow } from "./equipmentReturnForm/EquipmentReturnFormShow";
import { EquipmentCollectionFormList } from "./equipmentCollectionForm/EquipmentCollectionFormList";
import { EquipmentCollectionFormCreate } from "./equipmentCollectionForm/EquipmentCollectionFormCreate";
import { EquipmentCollectionFormEdit } from "./equipmentCollectionForm/EquipmentCollectionFormEdit";
import { EquipmentCollectionFormShow } from "./equipmentCollectionForm/EquipmentCollectionFormShow";
import { AssetExitFormForVendorList } from "./assetExitFormForVendor/AssetExitFormForVendorList";
import { AssetExitFormForVendorCreate } from "./assetExitFormForVendor/AssetExitFormForVendorCreate";
import { AssetExitFormForVendorEdit } from "./assetExitFormForVendor/AssetExitFormForVendorEdit";
import { AssetExitFormForVendorShow } from "./assetExitFormForVendor/AssetExitFormForVendorShow";
import { ProductRegistrationFormList } from "./productRegistrationForm/ProductRegistrationFormList";
import { ProductRegistrationFormCreate } from "./productRegistrationForm/ProductRegistrationFormCreate";
import { ProductRegistrationFormEdit } from "./productRegistrationForm/ProductRegistrationFormEdit";
import { ProductRegistrationFormShow } from "./productRegistrationForm/ProductRegistrationFormShow";
import { EquipmentLoanFormList } from "./equipmentLoanForm/EquipmentLoanFormList";
import { EquipmentLoanFormCreate } from "./equipmentLoanForm/EquipmentLoanFormCreate";
import { EquipmentLoanFormEdit } from "./equipmentLoanForm/EquipmentLoanFormEdit";
import { EquipmentLoanFormShow } from "./equipmentLoanForm/EquipmentLoanFormShow";
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
        title={"FHI360 WIMS-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="StateStore"
          list={StateStoreList}
          edit={StateStoreEdit}
          create={StateStoreCreate}
          show={StateStoreShow}
        />
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="EquipmentReturnForm"
          list={EquipmentReturnFormList}
          edit={EquipmentReturnFormEdit}
          create={EquipmentReturnFormCreate}
          show={EquipmentReturnFormShow}
        />
        <Resource
          name="EquipmentCollectionForm"
          list={EquipmentCollectionFormList}
          edit={EquipmentCollectionFormEdit}
          create={EquipmentCollectionFormCreate}
          show={EquipmentCollectionFormShow}
        />
        <Resource
          name="AssetExitFormForVendor"
          list={AssetExitFormForVendorList}
          edit={AssetExitFormForVendorEdit}
          create={AssetExitFormForVendorCreate}
          show={AssetExitFormForVendorShow}
        />
        <Resource
          name="ProductRegistrationForm"
          list={ProductRegistrationFormList}
          edit={ProductRegistrationFormEdit}
          create={ProductRegistrationFormCreate}
          show={ProductRegistrationFormShow}
        />
        <Resource
          name="EquipmentLoanForm"
          list={EquipmentLoanFormList}
          edit={EquipmentLoanFormEdit}
          create={EquipmentLoanFormCreate}
          show={EquipmentLoanFormShow}
        />
      </Admin>
    </div>
  );
};

export default App;
