import * as graphql from "@nestjs/graphql";
import { ReportService } from "./report.service";

export class ReportResolver {
  constructor(protected readonly service: ReportService) {}

  @graphql.Query(() => String)
  async GenerateDailyReport(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateDailyReport(args);
  }

  @graphql.Query(() => String)
  async GenerateMonthlyReport(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateMonthlyReport(args);
  }

  @graphql.Query(() => String)
  async GenerateWeeklyReport(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateWeeklyReport(args);
  }

  @graphql.Query(() => String)
  async GenerateYearlyReport(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateYearlyReport(args);
  }
}
