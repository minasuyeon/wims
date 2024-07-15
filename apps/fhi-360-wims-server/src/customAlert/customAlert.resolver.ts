import * as graphql from "@nestjs/graphql";
import { CustomAlertResolverBase } from "./base/customAlert.resolver.base";
import { CustomAlert } from "./base/CustomAlert";
import { CustomAlertService } from "./customAlert.service";

@graphql.Resolver(() => CustomAlert)
export class CustomAlertResolver extends CustomAlertResolverBase {
  constructor(protected readonly service: CustomAlertService) {
    super(service);
  }
}
