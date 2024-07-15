import { Module } from "@nestjs/common";
import { ApplicationUserModuleBase } from "./base/applicationUser.module.base";
import { ApplicationUserService } from "./applicationUser.service";
import { ApplicationUserController } from "./applicationUser.controller";
import { ApplicationUserResolver } from "./applicationUser.resolver";

@Module({
  imports: [ApplicationUserModuleBase],
  controllers: [ApplicationUserController],
  providers: [ApplicationUserService, ApplicationUserResolver],
  exports: [ApplicationUserService],
})
export class ApplicationUserModule {}
