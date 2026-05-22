import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident } from './incident.entity';
import { CreateIncidentInput, UpdateIncidentStatusInput } from './dto/incident.dto';

@Injectable()
export class IncidentsService {
  constructor(
    @InjectRepository(Incident)
    private incidentsRepo: Repository<Incident>,
  ) {}

  async create(input: CreateIncidentInput): Promise<Incident> {
    const incident = this.incidentsRepo.create(input);
    return this.incidentsRepo.save(incident);
  }

  async findAll(): Promise<Incident[]> {
    return this.incidentsRepo.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string): Promise<Incident> {
    const incident = await this.incidentsRepo.findOne({ where: { id } });
    if (!incident) throw new NotFoundException(`Incident ${id} not found`);
    return incident;
  }

  async updateStatus(input: UpdateIncidentStatusInput): Promise<Incident> {
    const incident = await this.findOne(input.id);
    incident.status = input.status;
    return this.incidentsRepo.save(incident);
  }
}
