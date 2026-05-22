import { Repository } from 'typeorm';
import { Incident } from './incident.entity';
import { CreateIncidentInput, UpdateIncidentStatusInput } from './dto/incident.dto';
export declare class IncidentsService {
    private incidentsRepo;
    constructor(incidentsRepo: Repository<Incident>);
    create(input: CreateIncidentInput): Promise<Incident>;
    findAll(): Promise<Incident[]>;
    findOne(id: string): Promise<Incident>;
    updateStatus(input: UpdateIncidentStatusInput): Promise<Incident>;
}
