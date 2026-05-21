import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrafficZone, TrafficDensity } from './traffic-zone.entity';

@Injectable()
export class TrafficService {
  constructor(
    @InjectRepository(TrafficZone)
    private zonesRepo: Repository<TrafficZone>,
  ) {}

  async createZone(name: string, latitude: number, longitude: number): Promise<TrafficZone> {
    const zone = this.zonesRepo.create({ name, latitude, longitude });
    return this.zonesRepo.save(zone);
  }

  async findAll(): Promise<TrafficZone[]> {
    return this.zonesRepo.find();
  }

  async findOne(id: string): Promise<TrafficZone> {
    const zone = await this.zonesRepo.findOne({ where: { id } });
    if (!zone) throw new NotFoundException(`Zone ${id} not found`);
    return zone;
  }

  async updateDensity(id: string, vehicleCount: number): Promise<TrafficZone> {
    const zone = await this.findOne(id);
    zone.vehicleCount = vehicleCount;
    if (vehicleCount < 10) zone.density = TrafficDensity.LOW;
    else if (vehicleCount < 30) zone.density = TrafficDensity.MEDIUM;
    else zone.density = TrafficDensity.HIGH;
    return this.zonesRepo.save(zone);
  }

  async getCongestedZones(): Promise<TrafficZone[]> {
    return this.zonesRepo.find({ where: { density: TrafficDensity.HIGH } });
  }
}
