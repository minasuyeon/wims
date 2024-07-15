import { Module } from "@nestjs/common";
import { ReportPreferencesService } from "./reportpreferences.service";
import { ReportPreferencesController } from "./reportpreferences.controller";
import { ReportPreferencesResolver } from "./reportpreferences.resolver";

@Module({
  controllers: [ReportPreferencesController],
  providers: [ReportPreferencesService, ReportPreferencesResolver],
  exports: [ReportPreferencesService],
})
export class ReportPreferencesModule {}
