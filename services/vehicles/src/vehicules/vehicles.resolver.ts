import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle.entity';
import { GpsPosition } from '../positions/position.entity';
import { CreateVehicleInput } from './dto/vehicle.dto';

@Resolver(() => Vehicle)
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Mutation(() => Vehicle)
  async createVehicle(@Args('input') input: CreateVehicleInput): Promise<Vehicle> {
    return this.vehiclesService.create(input);
  }

  @Query(() => [Vehicle])
  async vehicles(): Promise<Vehicle[]> {
    return this.vehiclesService.findAll();
  }

  @Query(() => Vehicle)
  async vehicle(@Args('id') id: string): Promise<Vehicle> {
    return this.vehiclesService.findOne(id);
  }

  @Mutation(() => GpsPosition)
  async addGpsPosition(
    @Args('vehicleId') vehicleId: string,
    @Args('latitude', { type: () => Float }) latitude: number,
    @Args('longitude', { type: () => Float }) longitude: number,
  ): Promise<GpsPosition> {
    return this.vehiclesService.addPosition(vehicleId, latitude, longitude);
  }

  @Query(() => [GpsPosition])
  async vehicleHistory(@Args('vehicleId') vehicleId: string): Promise<GpsPosition[]> {
    return this.vehiclesService.getHistory(vehicleId);
  }
}
