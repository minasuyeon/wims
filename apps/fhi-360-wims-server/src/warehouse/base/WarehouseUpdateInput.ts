/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { InventoryItemUpdateManyWithoutWarehousesInput } from "./InventoryItemUpdateManyWithoutWarehousesInput";
import { Type } from "class-transformer";
import { StateStoreWhereUniqueInput } from "../../stateStore/base/StateStoreWhereUniqueInput";

@InputType()
class WarehouseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => InventoryItemUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => InventoryItemUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => InventoryItemUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  inventoryItems?: InventoryItemUpdateManyWithoutWarehousesInput;

  @ApiProperty({
    required: false,
    type: () => StateStoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StateStoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StateStoreWhereUniqueInput, {
    nullable: true,
  })
  stateStore?: StateStoreWhereUniqueInput | null;
}

export { WarehouseUpdateInput as WarehouseUpdateInput };
