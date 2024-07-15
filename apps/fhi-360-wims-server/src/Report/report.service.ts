import { Injectable } from "@nestjs/common";

@Injectable()
export class ReportService {
  constructor() {}
  async GenerateDailyReport(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateMonthlyReport(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateWeeklyReport(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateYearlyReport(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
