import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InventoryManagementService } from "./inventorymanagement.service";

@swagger.ApiTags("inventoryManagements")
@common.Controller("inventoryManagements")
export class InventoryManagementController {
  constructor(protected readonly service: InventoryManagementService) {}
}
