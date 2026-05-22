import { IncidentsService } from './incidents.service';
import { Incident } from './incident.entity';
import { CreateIncidentInput, UpdateIncidentStatusInput } from './dto/incident.dto';
export declare class IncidentsResolver {
    private incidentsService;
    constructor(incidentsService: IncidentsService);
    createIncident(input: CreateIncidentInput): Promise<Incident>;
    incidents(): Promise<Incident[]>;
    incident(id: string): Promise<Incident>;
    updateIncidentStatus(input: UpdateIncidentStatusInput): Promise<Incident>;
}
