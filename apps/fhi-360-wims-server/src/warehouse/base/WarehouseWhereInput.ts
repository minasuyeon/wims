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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { InventoryItemListRelationFilter } from "../../inventoryItem/base/InventoryItemListRelationFilter";
import { StateStoreWhereUniqueInput } from "../../stateStore/base/StateStoreWhereUniqueInput";

@InputType()
class WarehouseWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  capacity?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => InventoryItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InventoryItemListRelationFilter)
  @IsOptional()
  @Field(() => InventoryItemListRelationFilter, {
    nullable: true,
  })
  inventoryItems?: InventoryItemListRelationFilter;

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
  stateStore?: StateStoreWhereUniqueInput;
}

export { WarehouseWhereInput as WarehouseWhereInput };
