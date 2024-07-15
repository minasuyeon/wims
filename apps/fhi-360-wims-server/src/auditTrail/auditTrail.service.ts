import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuditTrailServiceBase } from "./base/auditTrail.service.base";

@Injectable()
export class AuditTrailService extends AuditTrailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
