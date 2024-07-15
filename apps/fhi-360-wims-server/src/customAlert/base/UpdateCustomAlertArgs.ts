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
import { CustomAlertWhereUniqueInput } from "./CustomAlertWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomAlertUpdateInput } from "./CustomAlertUpdateInput";

@ArgsType()
class UpdateCustomAlertArgs {
  @ApiProperty({
    required: true,
    type: () => CustomAlertWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomAlertWhereUniqueInput)
  @Field(() => CustomAlertWhereUniqueInput, { nullable: false })
  where!: CustomAlertWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomAlertUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomAlertUpdateInput)
  @Field(() => CustomAlertUpdateInput, { nullable: false })
  data!: CustomAlertUpdateInput;
}

export { UpdateCustomAlertArgs as UpdateCustomAlertArgs };