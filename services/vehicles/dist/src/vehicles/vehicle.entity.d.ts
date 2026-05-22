import { GpsPosition } from '../positions/position.entity';
export declare enum VehicleType {
    CAR = "CAR",
    TRUCK = "TRUCK",
    BUS = "BUS",
    MOTORCYCLE = "MOTORCYCLE"
}
export declare class Vehicle {
    id: string;
    plateNumber: string;
    model: string;
    type: VehicleType;
    ownerId: string;
    positions: GpsPosition[];
    createdAt: Date;
}
