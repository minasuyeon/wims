import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EquipmentReturnFormService } from "./equipmentReturnForm.service";
import { EquipmentReturnFormControllerBase } from "./base/equipmentReturnForm.controller.base";

@swagger.ApiTags("equipmentReturnForms")
@common.Controller("equipmentReturnForms")
export class EquipmentReturnFormController extends EquipmentReturnFormControllerBase {
  constructor(
    protected readonly service: EquipmentReturnFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
