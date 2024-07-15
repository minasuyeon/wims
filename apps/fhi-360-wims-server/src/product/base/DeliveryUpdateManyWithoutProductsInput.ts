/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DeliveryWhereUniqueInput } from "../../delivery/base/DeliveryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DeliveryUpdateManyWithoutProductsInput {
  @Field(() => [DeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryWhereUniqueInput],
  })
  connect?: Array<DeliveryWhereUniqueInput>;

  @Field(() => [DeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryWhereUniqueInput],
  })
  disconnect?: Array<DeliveryWhereUniqueInput>;

  @Field(() => [DeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryWhereUniqueInput],
  })
  set?: Array<DeliveryWhereUniqueInput>;
}

export { DeliveryUpdateManyWithoutProductsInput as DeliveryUpdateManyWithoutProductsInput };
