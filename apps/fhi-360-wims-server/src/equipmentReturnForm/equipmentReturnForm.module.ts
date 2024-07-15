import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EquipmentReturnFormModuleBase } from "./base/equipmentReturnForm.module.base";
import { EquipmentReturnFormService } from "./equipmentReturnForm.service";
import { EquipmentReturnFormController } from "./equipmentReturnForm.controller";
import { EquipmentReturnFormResolver } from "./equipmentReturnForm.resolver";

@Module({
  imports: [EquipmentReturnFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [EquipmentReturnFormController],
  providers: [EquipmentReturnFormService, EquipmentReturnFormResolver],
  exports: [EquipmentReturnFormService],
})
export class EquipmentReturnFormModule {}
