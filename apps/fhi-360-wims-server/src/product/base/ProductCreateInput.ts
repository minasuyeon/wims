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
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumProductStatus } from "./EnumProductStatus";
import { Type } from "class-transformer";
import { DeliveryCreateNestedManyWithoutProductsInput } from "./DeliveryCreateNestedManyWithoutProductsInput";
import { PredictionCreateNestedManyWithoutProductsInput } from "./PredictionCreateNestedManyWithoutProductsInput";
import { CustomAlertCreateNestedManyWithoutProductsInput } from "./CustomAlertCreateNestedManyWithoutProductsInput";

@InputType()
class ProductCreateInput {
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
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumProductStatus,
  })
  @IsEnum(EnumProductStatus)
  @IsOptional()
  @Field(() => EnumProductStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  registrationDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => DeliveryCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => DeliveryCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => DeliveryCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  deliveries?: DeliveryCreateNestedManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => PredictionCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => PredictionCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => PredictionCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  predictions?: PredictionCreateNestedManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => CustomAlertCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => CustomAlertCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => CustomAlertCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  customAlerts?: CustomAlertCreateNestedManyWithoutProductsInput;
}

export { ProductCreateInput as ProductCreateInput };
