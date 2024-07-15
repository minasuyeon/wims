import * as graphql from "@nestjs/graphql";
import { StateStoreResolverBase } from "./base/stateStore.resolver.base";
import { StateStore } from "./base/StateStore";
import { StateStoreService } from "./stateStore.service";

@graphql.Resolver(() => StateStore)
export class StateStoreResolver extends StateStoreResolverBase {
  constructor(protected readonly service: StateStoreService) {
    super(service);
  }
}
