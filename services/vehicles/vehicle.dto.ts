import { InputType, Field, Float } from '@nestjs/graphql';
import { IsString, IsEnum, IsUUID, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import { VehicleType } from 'src/vehicles/vehicle.entity';

@InputType()
export class CreateVehicleInput {
  @Field()
  @IsString()
  licensePlate: string;

  @Field()
  @IsString()
  brand: string;

  @Field()
  @IsString()
  model: string;

  @Field(() => VehicleType, { nullable: true })
  @IsEnum(VehicleType)
  @IsOptional()
  type?: VehicleType;
}

@InputType()
export class AddPositionInput {
  @Field()
  @IsUUID()
  vehicleId: string;

  @Field(() => Float)
  @IsLatitude()
  latitude: number;

  @Field(() => Float)
  @IsLongitude()
  longitude: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  address?: string;
}