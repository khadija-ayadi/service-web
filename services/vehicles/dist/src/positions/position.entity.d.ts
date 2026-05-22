import { Vehicle } from '../vehicles/vehicle.entity';
export declare class GpsPosition {
    id: string;
    latitude: number;
    longitude: number;
    vehicleId: string;
    vehicle: Vehicle;
    recordedAt: Date;
}
