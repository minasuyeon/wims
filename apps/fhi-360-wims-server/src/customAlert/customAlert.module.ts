import { Module } from "@nestjs/common";
import { CustomAlertModuleBase } from "./base/customAlert.module.base";
import { CustomAlertService } from "./customAlert.service";
import { CustomAlertController } from "./customAlert.controller";
import { CustomAlertResolver } from "./customAlert.resolver";

@Module({
  imports: [CustomAlertModuleBase],
  controllers: [CustomAlertController],
  providers: [CustomAlertService, CustomAlertResolver],
  exports: [CustomAlertService],
})
export class CustomAlertModule {}
