import { Resolver, Query, Mutation, Args, Float, Int } from '@nestjs/graphql';
import { TrafficService } from './traffic.service';
import { TrafficZone } from './traffic-zone.entity';

@Resolver(() => TrafficZone)
export class TrafficResolver {
  constructor(private trafficService: TrafficService) {}

  @Mutation(() => TrafficZone)
  async createZone(
    @Args('name') name: string,
    @Args('latitude', { type: () => Float }) latitude: number,
    @Args('longitude', { type: () => Float }) longitude: number,
  ): Promise<TrafficZone> {
    return this.trafficService.createZone(name, latitude, longitude);
  }

  @Query(() => [TrafficZone])
  async trafficZones(): Promise<TrafficZone[]> {
    return this.trafficService.findAll();
  }

  @Query(() => [TrafficZone])
  async congestedZones(): Promise<TrafficZone[]> {
    return this.trafficService.getCongestedZones();
  }

  @Mutation(() => TrafficZone)
  async updateTrafficDensity(
    @Args('id') id: string,
    @Args('vehicleCount', { type: () => Int }) vehicleCount: number,
  ): Promise<TrafficZone> {
    return this.trafficService.updateDensity(id, vehicleCount);
  }
}
