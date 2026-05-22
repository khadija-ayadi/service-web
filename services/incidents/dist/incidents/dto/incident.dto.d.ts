import { IncidentType, IncidentStatus } from '../incident.entity';
export declare class CreateIncidentInput {
    title: string;
    location: string;
    type: IncidentType;
    description?: string;
    reportedBy: string;
}
export declare class UpdateIncidentStatusInput {
    id: string;
    status: IncidentStatus;
}
