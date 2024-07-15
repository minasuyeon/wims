import { Module } from "@nestjs/common";
import { AuditTrailModuleBase } from "./base/auditTrail.module.base";
import { AuditTrailService } from "./auditTrail.service";
import { AuditTrailController } from "./auditTrail.controller";
import { AuditTrailResolver } from "./auditTrail.resolver";

@Module({
  imports: [AuditTrailModuleBase],
  controllers: [AuditTrailController],
  providers: [AuditTrailService, AuditTrailResolver],
  exports: [AuditTrailService],
})
export class AuditTrailModule {}
