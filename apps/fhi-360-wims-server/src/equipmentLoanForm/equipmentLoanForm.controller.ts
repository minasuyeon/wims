import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EquipmentLoanFormService } from "./equipmentLoanForm.service";
import { EquipmentLoanFormControllerBase } from "./base/equipmentLoanForm.controller.base";

@swagger.ApiTags("equipmentLoanForms")
@common.Controller("equipmentLoanForms")
export class EquipmentLoanFormController extends EquipmentLoanFormControllerBase {
  constructor(
    protected readonly service: EquipmentLoanFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
