import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomAlertService } from "./customAlert.service";
import { CustomAlertControllerBase } from "./base/customAlert.controller.base";

@swagger.ApiTags("customAlerts")
@common.Controller("customAlerts")
export class CustomAlertController extends CustomAlertControllerBase {
  constructor(protected readonly service: CustomAlertService) {
    super(service);
  }
}
