import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { GpsPosition } from '../positions/position.entity';
import { CreateVehicleInput, AddPositionInput } from './dto/vehicles.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepo: Repository<Vehicle>,
    @InjectRepository(GpsPosition)
    private positionsRepo: Repository<GpsPosition>,
  ) {}

  async create(input: CreateVehicleInput, ownerId: string): Promise<Vehicle> {
    const vehicle = this.vehiclesRepo.create({ ...input, ownerId });
    return this.vehiclesRepo.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehiclesRepo.find();
  }

  async findOne(id: string): Promise<Vehicle> {
    const v = await this.vehiclesRepo.findOne({ where: { id } });
    if (!v) throw new NotFoundException(`Vehicle ${id} not found`);
    return v;
  }

  async addPosition(input: AddPositionInput): Promise<GpsPosition> {
    await this.findOne(input.vehicleId);
    const pos = this.positionsRepo.create(input);
    return this.positionsRepo.save(pos);
  }

  async getHistory(vehicleId: string): Promise<GpsPosition[]> {
    await this.findOne(vehicleId);
    return this.positionsRepo.find({
      where: { vehicleId },
      order: { recordedAt: 'DESC' },
    });
  }
}