import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle.entity';
import { GpsPosition } from '../positions/position.entity';
import { CreateVehicleInput } from './dto/vehicle.dto';
export declare class VehiclesResolver {
    private vehiclesService;
    constructor(vehiclesService: VehiclesService);
    createVehicle(input: CreateVehicleInput): Promise<Vehicle>;
    vehicles(): Promise<Vehicle[]>;
    vehicle(id: string): Promise<Vehicle>;
    addGpsPosition(vehicleId: string, latitude: number, longitude: number): Promise<GpsPosition>;
    vehicleHistory(vehicleId: string): Promise<GpsPosition[]>;
}
