import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';
import { Vehicle } from './vehicle.entity';
import { GpsPosition } from '../positions/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, GpsPosition])],
  providers: [VehiclesService, VehiclesResolver],
})
export class VehiclesModule {}
