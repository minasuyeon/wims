import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomAlertServiceBase } from "./base/customAlert.service.base";

@Injectable()
export class CustomAlertService extends CustomAlertServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
