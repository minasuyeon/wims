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
import { StateStoreWhereUniqueInput } from "./StateStoreWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StateStoreUpdateInput } from "./StateStoreUpdateInput";

@ArgsType()
class UpdateStateStoreArgs {
  @ApiProperty({
    required: true,
    type: () => StateStoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StateStoreWhereUniqueInput)
  @Field(() => StateStoreWhereUniqueInput, { nullable: false })
  where!: StateStoreWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StateStoreUpdateInput,
  })
  @ValidateNested()
  @Type(() => StateStoreUpdateInput)
  @Field(() => StateStoreUpdateInput, { nullable: false })
  data!: StateStoreUpdateInput;
}

export { UpdateStateStoreArgs as UpdateStateStoreArgs };
