import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StateStoreService } from "./stateStore.service";
import { StateStoreControllerBase } from "./base/stateStore.controller.base";

@swagger.ApiTags("stateStores")
@common.Controller("stateStores")
export class StateStoreController extends StateStoreControllerBase {
  constructor(protected readonly service: StateStoreService) {
    super(service);
  }
}
