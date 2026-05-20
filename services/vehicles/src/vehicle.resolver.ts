import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle.entity';
import { GpsPosition } from '../positions/position.entity';
import { CreateVehicleInput, AddPositionInput } from './dto/vehicles.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './guards/current-user.decorator';

@Resolver(() => Vehicle)
@UseGuards(JwtAuthGuard)
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Mutation(() => Vehicle)
  createVehicle(
    @Args('input') input: CreateVehicleInput,
    @CurrentUser() user: any,
  ) {
    return this.vehiclesService.create(input, user.id);
  }

  @Query(() => [Vehicle])
  vehicles() {
    return this.vehiclesService.findAll();
  }

  @Query(() => Vehicle)
  vehicle(@Args('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Mutation(() => GpsPosition)
  addPosition(@Args('input') input: AddPositionInput) {
    return this.vehiclesService.addPosition(input);
  }

  @Query(() => [GpsPosition])
  vehicleHistory(@Args('vehicleId') vehicleId: string) {
    return this.vehiclesService.getHistory(vehicleId);
  }

  @ResolveField(() => [GpsPosition])
  positions(@Parent() vehicle: Vehicle) {
    return this.vehiclesService.getHistory(vehicle.id);
  }
}