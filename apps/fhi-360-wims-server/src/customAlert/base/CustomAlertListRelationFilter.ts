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
import { CustomAlertWhereInput } from "./CustomAlertWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomAlertListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomAlertWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomAlertWhereInput)
  @IsOptional()
  @Field(() => CustomAlertWhereInput, {
    nullable: true,
  })
  every?: CustomAlertWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomAlertWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomAlertWhereInput)
  @IsOptional()
  @Field(() => CustomAlertWhereInput, {
    nullable: true,
  })
  some?: CustomAlertWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomAlertWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomAlertWhereInput)
  @IsOptional()
  @Field(() => CustomAlertWhereInput, {
    nullable: true,
  })
  none?: CustomAlertWhereInput;
}
export { CustomAlertListRelationFilter as CustomAlertListRelationFilter };
