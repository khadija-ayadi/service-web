import { TrafficService } from './traffic.service';
import { TrafficZone } from './traffic-zone.entity';
export declare class TrafficResolver {
    private trafficService;
    constructor(trafficService: TrafficService);
    createZone(name: string, latitude: number, longitude: number): Promise<TrafficZone>;
    trafficZones(): Promise<TrafficZone[]>;
    congestedZones(): Promise<TrafficZone[]>;
    updateTrafficDensity(id: string, vehicleCount: number): Promise<TrafficZone>;
}
