export declare enum IncidentType {
    ACCIDENT = "ACCIDENT",
    WORKS = "WORKS",
    CLOSED_ROAD = "CLOSED_ROAD",
    TRAFFIC_JAM = "TRAFFIC_JAM"
}
export declare enum IncidentStatus {
    REPORTED = "REPORTED",
    IN_PROGRESS = "IN_PROGRESS",
    RESOLVED = "RESOLVED"
}
export declare class Incident {
    id: string;
    title: string;
    location: string;
    type: IncidentType;
    status: IncidentStatus;
    description: string;
    reportedBy: string;
    createdAt: Date;
    updatedAt: Date;
}
