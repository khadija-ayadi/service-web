import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEnum } from 'class-validator';
import { VehicleType } from '../vehicle.entity';

@InputType()
export class CreateVehicleInput {
  @Field()
  @IsString()
  plateNumber: string;

  @Field()
  @IsString()
  model: string;

  @Field(() => VehicleType)
  @IsEnum(VehicleType)
  type: VehicleType;

  @Field()
  @IsString()
  ownerId: string;
}
