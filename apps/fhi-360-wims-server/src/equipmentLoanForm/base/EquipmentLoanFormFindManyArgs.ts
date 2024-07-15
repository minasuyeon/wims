/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EquipmentLoanFormWhereInput } from "./EquipmentLoanFormWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EquipmentLoanFormOrderByInput } from "./EquipmentLoanFormOrderByInput";

@ArgsType()
class EquipmentLoanFormFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EquipmentLoanFormWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EquipmentLoanFormWhereInput, { nullable: true })
  @Type(() => EquipmentLoanFormWhereInput)
  where?: EquipmentLoanFormWhereInput;

  @ApiProperty({
    required: false,
    type: [EquipmentLoanFormOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EquipmentLoanFormOrderByInput], { nullable: true })
  @Type(() => EquipmentLoanFormOrderByInput)
  orderBy?: Array<EquipmentLoanFormOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EquipmentLoanFormFindManyArgs as EquipmentLoanFormFindManyArgs };