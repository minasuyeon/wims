import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentLoanFormServiceBase } from "./base/equipmentLoanForm.service.base";

@Injectable()
export class EquipmentLoanFormService extends EquipmentLoanFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
