import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EquipmentCollectionFormResolverBase } from "./base/equipmentCollectionForm.resolver.base";
import { EquipmentCollectionForm } from "./base/EquipmentCollectionForm";
import { EquipmentCollectionFormService } from "./equipmentCollectionForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EquipmentCollectionForm)
export class EquipmentCollectionFormResolver extends EquipmentCollectionFormResolverBase {
  constructor(
    protected readonly service: EquipmentCollectionFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
