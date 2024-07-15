import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryItemServiceBase } from "./base/inventoryItem.service.base";

@Injectable()
export class InventoryItemService extends InventoryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
