import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReportService } from "./report.service";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportController {
  constructor(protected readonly service: ReportService) {}

  @common.Get("/generateDailyReport")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateDailyReport(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateDailyReport(body);
      }

  @common.Get("/generateMonthlyReport")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateMonthlyReport(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateMonthlyReport(body);
      }

  @common.Get("/generateWeeklyReport")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateWeeklyReport(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateWeeklyReport(body);
      }

  @common.Get("/generateYearlyReport")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateYearlyReport(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateYearlyReport(body);
      }
}
