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
import { ProductRegistrationFormWhereInput } from "./ProductRegistrationFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductRegistrationFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductRegistrationFormWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductRegistrationFormWhereInput)
  @IsOptional()
  @Field(() => ProductRegistrationFormWhereInput, {
    nullable: true,
  })
  every?: ProductRegistrationFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductRegistrationFormWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductRegistrationFormWhereInput)
  @IsOptional()
  @Field(() => ProductRegistrationFormWhereInput, {
    nullable: true,
  })
  some?: ProductRegistrationFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductRegistrationFormWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductRegistrationFormWhereInput)
  @IsOptional()
  @Field(() => ProductRegistrationFormWhereInput, {
    nullable: true,
  })
  none?: ProductRegistrationFormWhereInput;
}
export { ProductRegistrationFormListRelationFilter as ProductRegistrationFormListRelationFilter };
