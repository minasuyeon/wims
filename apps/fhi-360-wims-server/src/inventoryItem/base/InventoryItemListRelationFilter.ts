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
import { InventoryItemWhereInput } from "./InventoryItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InventoryItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InventoryItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InventoryItemWhereInput)
  @IsOptional()
  @Field(() => InventoryItemWhereInput, {
    nullable: true,
  })
  every?: InventoryItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => InventoryItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InventoryItemWhereInput)
  @IsOptional()
  @Field(() => InventoryItemWhereInput, {
    nullable: true,
  })
  some?: InventoryItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => InventoryItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InventoryItemWhereInput)
  @IsOptional()
  @Field(() => InventoryItemWhereInput, {
    nullable: true,
  })
  none?: InventoryItemWhereInput;
}
export { InventoryItemListRelationFilter as InventoryItemListRelationFilter };