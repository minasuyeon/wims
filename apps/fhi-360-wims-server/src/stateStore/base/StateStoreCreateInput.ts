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
  ValidateNested,
} from "class-validator";
import { WarehouseCreateNestedManyWithoutStateStoresInput } from "./WarehouseCreateNestedManyWithoutStateStoresInput";
import { Type } from "class-transformer";

@InputType()
class StateStoreCreateInput {
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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stateId?: string | null;

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
  managerId?: string | null;

  @ApiProperty({
    required: false,
    type: () => WarehouseCreateNestedManyWithoutStateStoresInput,
  })
  @ValidateNested()
  @Type(() => WarehouseCreateNestedManyWithoutStateStoresInput)
  @IsOptional()
  @Field(() => WarehouseCreateNestedManyWithoutStateStoresInput, {
    nullable: true,
  })
  warehouses?: WarehouseCreateNestedManyWithoutStateStoresInput;
}

export { StateStoreCreateInput as StateStoreCreateInput };
