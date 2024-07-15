import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { Privilege } from "../userManagement/Privilege";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Post("/assign-privilege")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignPrivilege(
    @common.Body()
    body: Privilege
  ): Promise<string> {
        return this.service.AssignPrivilege(body);
      }

  @common.Post("/user-role")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUserRole(
    @common.Body()
    body: Privilege
  ): Promise<string> {
        return this.service.CreateUserRole(body);
      }
}
