import { Module } from "@nestjs/common";
import { SupplierModule } from "./supplier/supplier.module";
import { StateStoreModule } from "./stateStore/stateStore.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { ProductModule } from "./product/product.module";
import { ReportModule } from "./report/report.module";
import { UserModule } from "./user/user.module";
import { EquipmentReturnFormModule } from "./equipmentReturnForm/equipmentReturnForm.module";
import { EquipmentCollectionFormModule } from "./equipmentCollectionForm/equipmentCollectionForm.module";
import { AssetExitFormForVendorModule } from "./assetExitFormForVendor/assetExitFormForVendor.module";
import { ProductRegistrationFormModule } from "./productRegistrationForm/productRegistrationForm.module";
import { EquipmentLoanFormModule } from "./equipmentLoanForm/equipmentLoanForm.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    SupplierModule,
    StateStoreModule,
    DeliveryModule,
    ProductModule,
    ReportModule,
    UserModule,
    EquipmentReturnFormModule,
    EquipmentCollectionFormModule,
    AssetExitFormForVendorModule,
    ProductRegistrationFormModule,
    EquipmentLoanFormModule,
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
