import { Module } from "@nestjs/common";
import { ReportService } from "./report.service";
import { ReportController } from "./report.controller";
import { ReportResolver } from "./report.resolver";

@Module({
  controllers: [ReportController],
  providers: [ReportService, ReportResolver],
  exports: [ReportService],
})
export class ReportModule {}
