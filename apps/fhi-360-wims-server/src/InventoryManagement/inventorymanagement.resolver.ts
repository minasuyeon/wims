import * as graphql from "@nestjs/graphql";
import { InventoryManagementService } from "./inventorymanagement.service";

export class InventoryManagementResolver {
  constructor(protected readonly service: InventoryManagementService) {}
}
