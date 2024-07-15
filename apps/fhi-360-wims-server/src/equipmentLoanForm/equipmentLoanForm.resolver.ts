import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EquipmentLoanFormResolverBase } from "./base/equipmentLoanForm.resolver.base";
import { EquipmentLoanForm } from "./base/EquipmentLoanForm";
import { EquipmentLoanFormService } from "./equipmentLoanForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EquipmentLoanForm)
export class EquipmentLoanFormResolver extends EquipmentLoanFormResolverBase {
  constructor(
    protected readonly service: EquipmentLoanFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
