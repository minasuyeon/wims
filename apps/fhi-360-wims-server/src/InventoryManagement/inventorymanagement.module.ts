import { Module } from "@nestjs/common";
import { InventoryManagementService } from "./inventorymanagement.service";
import { InventoryManagementController } from "./inventorymanagement.controller";
import { InventoryManagementResolver } from "./inventorymanagement.resolver";

@Module({
  controllers: [InventoryManagementController],
  providers: [InventoryManagementService, InventoryManagementResolver],
  exports: [InventoryManagementService],
})
export class InventoryManagementModule {}
