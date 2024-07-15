import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductRegistrationFormService } from "./productRegistrationForm.service";
import { ProductRegistrationFormControllerBase } from "./base/productRegistrationForm.controller.base";

@swagger.ApiTags("productRegistrationForms")
@common.Controller("productRegistrationForms")
export class ProductRegistrationFormController extends ProductRegistrationFormControllerBase {
  constructor(
    protected readonly service: ProductRegistrationFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
