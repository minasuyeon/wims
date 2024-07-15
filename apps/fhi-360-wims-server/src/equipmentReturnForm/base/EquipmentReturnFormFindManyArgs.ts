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
import { EquipmentReturnFormWhereInput } from "./EquipmentReturnFormWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EquipmentReturnFormOrderByInput } from "./EquipmentReturnFormOrderByInput";

@ArgsType()
class EquipmentReturnFormFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EquipmentReturnFormWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EquipmentReturnFormWhereInput, { nullable: true })
  @Type(() => EquipmentReturnFormWhereInput)
  where?: EquipmentReturnFormWhereInput;

  @ApiProperty({
    required: false,
    type: [EquipmentReturnFormOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EquipmentReturnFormOrderByInput], { nullable: true })
  @Type(() => EquipmentReturnFormOrderByInput)
  orderBy?: Array<EquipmentReturnFormOrderByInput>;

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

export { EquipmentReturnFormFindManyArgs as EquipmentReturnFormFindManyArgs };