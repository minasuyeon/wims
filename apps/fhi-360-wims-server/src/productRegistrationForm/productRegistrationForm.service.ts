import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductRegistrationFormServiceBase } from "./base/productRegistrationForm.service.base";

@Injectable()
export class ProductRegistrationFormService extends ProductRegistrationFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
