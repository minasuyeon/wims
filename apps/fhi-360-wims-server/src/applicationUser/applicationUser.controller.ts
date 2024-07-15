import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationUserService } from "./applicationUser.service";
import { ApplicationUserControllerBase } from "./base/applicationUser.controller.base";

@swagger.ApiTags("applicationUsers")
@common.Controller("applicationUsers")
export class ApplicationUserController extends ApplicationUserControllerBase {
  constructor(protected readonly service: ApplicationUserService) {
    super(service);
  }
}
