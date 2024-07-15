import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductRegistrationFormModuleBase } from "./base/productRegistrationForm.module.base";
import { ProductRegistrationFormService } from "./productRegistrationForm.service";
import { ProductRegistrationFormController } from "./productRegistrationForm.controller";
import { ProductRegistrationFormResolver } from "./productRegistrationForm.resolver";

@Module({
  imports: [ProductRegistrationFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductRegistrationFormController],
  providers: [ProductRegistrationFormService, ProductRegistrationFormResolver],
  exports: [ProductRegistrationFormService],
})
export class ProductRegistrationFormModule {}
