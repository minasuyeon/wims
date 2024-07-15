import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentReturnFormServiceBase } from "./base/equipmentReturnForm.service.base";

@Injectable()
export class EquipmentReturnFormService extends EquipmentReturnFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
