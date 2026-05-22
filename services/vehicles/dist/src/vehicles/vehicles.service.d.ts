import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleInput } from './dto/vehicle.dto';
import { GpsPosition } from "../positions/position.entity";
export declare class VehiclesService {
    private vehiclesRepo;
    private positionsRepo;
    constructor(vehiclesRepo: Repository<Vehicle>, positionsRepo: Repository<GpsPosition>);
    create(input: CreateVehicleInput): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: string): Promise<Vehicle>;
    addPosition(vehicleId: string, latitude: number, longitude: number): Promise<GpsPosition>;
    getHistory(vehicleId: string): Promise<GpsPosition[]>;
}
