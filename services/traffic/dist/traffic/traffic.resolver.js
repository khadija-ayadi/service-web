"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const traffic_service_1 = require("./traffic.service");
const traffic_zone_entity_1 = require("./traffic-zone.entity");
let TrafficResolver = class TrafficResolver {
    trafficService;
    constructor(trafficService) {
        this.trafficService = trafficService;
    }
    async createZone(name, latitude, longitude) {
        return this.trafficService.createZone(name, latitude, longitude);
    }
    async trafficZones() {
        return this.trafficService.findAll();
    }
    async congestedZones() {
        return this.trafficService.getCongestedZones();
    }
    async updateTrafficDensity(id, vehicleCount) {
        return this.trafficService.updateDensity(id, vehicleCount);
    }
};
exports.TrafficResolver = TrafficResolver;
__decorate([
    (0, graphql_1.Mutation)(() => traffic_zone_entity_1.TrafficZone),
    __param(0, (0, graphql_1.Args)('name')),
    __param(1, (0, graphql_1.Args)('latitude', { type: () => graphql_1.Float })),
    __param(2, (0, graphql_1.Args)('longitude', { type: () => graphql_1.Float })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], TrafficResolver.prototype, "createZone", null);
__decorate([
    (0, graphql_1.Query)(() => [traffic_zone_entity_1.TrafficZone]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrafficResolver.prototype, "trafficZones", null);
__decorate([
    (0, graphql_1.Query)(() => [traffic_zone_entity_1.TrafficZone]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrafficResolver.prototype, "congestedZones", null);
__decorate([
    (0, graphql_1.Mutation)(() => traffic_zone_entity_1.TrafficZone),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('vehicleCount', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TrafficResolver.prototype, "updateTrafficDensity", null);
exports.TrafficResolver = TrafficResolver = __decorate([
    (0, graphql_1.Resolver)(() => traffic_zone_entity_1.TrafficZone),
    __metadata("design:paramtypes", [traffic_service_1.TrafficService])
], TrafficResolver);
//# sourceMappingURL=traffic.resolver.js.map