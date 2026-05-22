import { Repository } from 'typeorm';
import { TrafficZone } from './traffic-zone.entity';
export declare class TrafficService {
    private zonesRepo;
    constructor(zonesRepo: Repository<TrafficZone>);
    createZone(name: string, latitude: number, longitude: number): Promise<TrafficZone>;
    findAll(): Promise<TrafficZone[]>;
    findOne(id: string): Promise<TrafficZone>;
    updateDensity(id: string, vehicleCount: number): Promise<TrafficZone>;
    getCongestedZones(): Promise<TrafficZone[]>;
}
