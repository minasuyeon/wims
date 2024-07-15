import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EquipmentReturnFormResolverBase } from "./base/equipmentReturnForm.resolver.base";
import { EquipmentReturnForm } from "./base/EquipmentReturnForm";
import { EquipmentReturnFormService } from "./equipmentReturnForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EquipmentReturnForm)
export class EquipmentReturnFormResolver extends EquipmentReturnFormResolverBase {
  constructor(
    protected readonly service: EquipmentReturnFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
