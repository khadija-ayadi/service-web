import { VehicleType } from "./src/vehicles/vehicle.entity";
export declare class CreateVehicleInput {
    licensePlate: string;
    brand: string;
    model: string;
    type?: VehicleType;
}
export declare class AddPositionInput {
    vehicleId: string;
    latitude: number;
    longitude: number;
    address?: string;
}
