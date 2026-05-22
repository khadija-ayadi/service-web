import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleInput } from './dto/vehicle.dto';
import { GpsPosition } from 'src/positions/position.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepo: Repository<Vehicle>,
    @InjectRepository(GpsPosition)
    private positionsRepo: Repository<GpsPosition>,
  ) {}

  async create(input: CreateVehicleInput): Promise<Vehicle> {
    const vehicle = this.vehiclesRepo.create(input);
    return this.vehiclesRepo.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehiclesRepo.find();
  }

  async findOne(id: string): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepo.findOne({ where: { id } });
    if (!vehicle) throw new NotFoundException(`Vehicle ${id} not found`);
    return vehicle;
  }

  async addPosition(vehicleId: string, latitude: number, longitude: number): Promise<GpsPosition> {
    await this.findOne(vehicleId);
    const position = this.positionsRepo.create({ vehicleId, latitude, longitude });
    return this.positionsRepo.save(position);
  }

  async getHistory(vehicleId: string): Promise<GpsPosition[]> {
    return this.positionsRepo.find({
      where: { vehicleId },
      order: { recordedAt: 'DESC' },
    });
  }
}
