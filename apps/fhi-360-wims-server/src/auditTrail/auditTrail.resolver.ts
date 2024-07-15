import * as graphql from "@nestjs/graphql";
import { AuditTrailResolverBase } from "./base/auditTrail.resolver.base";
import { AuditTrail } from "./base/AuditTrail";
import { AuditTrailService } from "./auditTrail.service";

@graphql.Resolver(() => AuditTrail)
export class AuditTrailResolver extends AuditTrailResolverBase {
  constructor(protected readonly service: AuditTrailService) {
    super(service);
  }
}
