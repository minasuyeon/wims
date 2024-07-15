import { Module } from "@nestjs/common";
import { StateStoreModuleBase } from "./base/stateStore.module.base";
import { StateStoreService } from "./stateStore.service";
import { StateStoreController } from "./stateStore.controller";
import { StateStoreResolver } from "./stateStore.resolver";

@Module({
  imports: [StateStoreModuleBase],
  controllers: [StateStoreController],
  providers: [StateStoreService, StateStoreResolver],
  exports: [StateStoreService],
})
export class StateStoreModule {}
