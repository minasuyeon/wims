import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EquipmentCollectionFormModuleBase } from "./base/equipmentCollectionForm.module.base";
import { EquipmentCollectionFormService } from "./equipmentCollectionForm.service";
import { EquipmentCollectionFormController } from "./equipmentCollectionForm.controller";
import { EquipmentCollectionFormResolver } from "./equipmentCollectionForm.resolver";

@Module({
  imports: [EquipmentCollectionFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [EquipmentCollectionFormController],
  providers: [EquipmentCollectionFormService, EquipmentCollectionFormResolver],
  exports: [EquipmentCollectionFormService],
})
export class EquipmentCollectionFormModule {}
