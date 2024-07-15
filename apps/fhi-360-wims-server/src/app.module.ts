import { Module } from "@nestjs/common";
import { InventoryItemModule } from "./inventoryItem/inventoryItem.module";
import { WarehouseModule } from "./warehouse/warehouse.module";
import { FormModule } from "./form/form.module";
import { SupplierModule } from "./supplier/supplier.module";
import { CategoryModule } from "./category/category.module";
import { VendorModule } from "./vendor/vendor.module";
import { RoleModule } from "./role/role.module";
import { StateStoreModule } from "./stateStore/stateStore.module";
import { UserModule } from "./user/user.module";
import { LocationModule } from "./location/location.module";
import { PredictionModule } from "./prediction/prediction.module";
import { ReportModule } from "./report/report.module";
import { ProductModule } from "./product/product.module";
import { CustomAlertModule } from "./customAlert/customAlert.module";
import { AuditTrailModule } from "./auditTrail/auditTrail.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { InventoryReportModule } from "./inventoryReport/inventoryReport.module";
import { VendorSupplierModule } from "./vendorSupplier/vendorSupplier.module";
import { ApplicationUserModule } from "./applicationUser/applicationUser.module";
import { InventoryManagementModule } from "./InventoryManagement/inventorymanagement.module";
import { ReportModule } from "./Report/report.module";
import { ReportPreferencesModule } from "./ReportPreferences/reportpreferences.module";
import { UserManagementModule } from "./UserManagement/usermanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    InventoryItemModule,
    WarehouseModule,
    FormModule,
    SupplierModule,
    CategoryModule,
    VendorModule,
    RoleModule,
    StateStoreModule,
    UserModule,
    LocationModule,
    PredictionModule,
    ReportModule,
    ProductModule,
    CustomAlertModule,
    AuditTrailModule,
    InvoiceModule,
    DeliveryModule,
    UserRoleModule,
    InventoryReportModule,
    VendorSupplierModule,
    ApplicationUserModule,
    InventoryManagementModule,
    ReportModule,
    ReportPreferencesModule,
    UserManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
