import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StateStoreModuleBase } from "./base/stateStore.module.base";
import { StateStoreService } from "./stateStore.service";
import { StateStoreController } from "./stateStore.controller";
import { StateStoreResolver } from "./stateStore.resolver";

@Module({
  imports: [StateStoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [StateStoreController],
  providers: [StateStoreService, StateStoreResolver],
  exports: [StateStoreService],
})
export class StateStoreModule {}
