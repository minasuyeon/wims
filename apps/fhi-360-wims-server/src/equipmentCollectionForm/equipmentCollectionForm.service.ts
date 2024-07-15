import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentCollectionFormServiceBase } from "./base/equipmentCollectionForm.service.base";

@Injectable()
export class EquipmentCollectionFormService extends EquipmentCollectionFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
