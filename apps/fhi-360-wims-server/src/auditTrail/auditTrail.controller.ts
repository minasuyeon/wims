import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuditTrailService } from "./auditTrail.service";
import { AuditTrailControllerBase } from "./base/auditTrail.controller.base";

@swagger.ApiTags("auditTrails")
@common.Controller("auditTrails")
export class AuditTrailController extends AuditTrailControllerBase {
  constructor(protected readonly service: AuditTrailService) {
    super(service);
  }
}
