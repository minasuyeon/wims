import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EquipmentCollectionFormService } from "./equipmentCollectionForm.service";
import { EquipmentCollectionFormControllerBase } from "./base/equipmentCollectionForm.controller.base";

@swagger.ApiTags("equipmentCollectionForms")
@common.Controller("equipmentCollectionForms")
export class EquipmentCollectionFormController extends EquipmentCollectionFormControllerBase {
  constructor(
    protected readonly service: EquipmentCollectionFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
