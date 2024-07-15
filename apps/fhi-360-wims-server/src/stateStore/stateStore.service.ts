import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StateStoreServiceBase } from "./base/stateStore.service.base";

@Injectable()
export class StateStoreService extends StateStoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
