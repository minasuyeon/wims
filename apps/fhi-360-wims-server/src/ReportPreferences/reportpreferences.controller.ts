import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReportPreferencesService } from "./reportpreferences.service";

@swagger.ApiTags("reportPreferences")
@common.Controller("reportPreferences")
export class ReportPreferencesController {
  constructor(protected readonly service: ReportPreferencesService) {}
}
