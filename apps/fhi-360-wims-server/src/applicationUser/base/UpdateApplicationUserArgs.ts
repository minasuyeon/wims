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
import { ApplicationUserWhereUniqueInput } from "./ApplicationUserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApplicationUserUpdateInput } from "./ApplicationUserUpdateInput";

@ArgsType()
class UpdateApplicationUserArgs {
  @ApiProperty({
    required: true,
    type: () => ApplicationUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicationUserWhereUniqueInput)
  @Field(() => ApplicationUserWhereUniqueInput, { nullable: false })
  where!: ApplicationUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ApplicationUserUpdateInput,
  })
  @ValidateNested()
  @Type(() => ApplicationUserUpdateInput)
  @Field(() => ApplicationUserUpdateInput, { nullable: false })
  data!: ApplicationUserUpdateInput;
}

export { UpdateApplicationUserArgs as UpdateApplicationUserArgs };