import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EquipmentLoanFormModuleBase } from "./base/equipmentLoanForm.module.base";
import { EquipmentLoanFormService } from "./equipmentLoanForm.service";
import { EquipmentLoanFormController } from "./equipmentLoanForm.controller";
import { EquipmentLoanFormResolver } from "./equipmentLoanForm.resolver";

@Module({
  imports: [EquipmentLoanFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [EquipmentLoanFormController],
  providers: [EquipmentLoanFormService, EquipmentLoanFormResolver],
  exports: [EquipmentLoanFormService],
})
export class EquipmentLoanFormModule {}
