export declare enum TrafficDensity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
export declare class TrafficZone {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    vehicleCount: number;
    density: TrafficDensity;
    createdAt: Date;
    updatedAt: Date;
}
