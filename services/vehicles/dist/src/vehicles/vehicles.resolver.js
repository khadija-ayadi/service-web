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
exports.VehiclesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const vehicles_service_1 = require("./vehicles.service");
const vehicle_entity_1 = require("./vehicle.entity");
const position_entity_1 = require("../positions/position.entity");
const vehicle_dto_1 = require("./dto/vehicle.dto");
let VehiclesResolver = class VehiclesResolver {
    vehiclesService;
    constructor(vehiclesService) {
        this.vehiclesService = vehiclesService;
    }
    async createVehicle(input) {
        return this.vehiclesService.create(input);
    }
    async vehicles() {
        return this.vehiclesService.findAll();
    }
    async vehicle(id) {
        return this.vehiclesService.findOne(id);
    }
    async addGpsPosition(vehicleId, latitude, longitude) {
        return this.vehiclesService.addPosition(vehicleId, latitude, longitude);
    }
    async vehicleHistory(vehicleId) {
        return this.vehiclesService.getHistory(vehicleId);
    }
};
exports.VehiclesResolver = VehiclesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => vehicle_entity_1.Vehicle),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vehicle_dto_1.CreateVehicleInput]),
    __metadata("design:returntype", Promise)
], VehiclesResolver.prototype, "createVehicle", null);
__decorate([
    (0, graphql_1.Query)(() => [vehicle_entity_1.Vehicle]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VehiclesResolver.prototype, "vehicles", null);
__decorate([
    (0, graphql_1.Query)(() => vehicle_entity_1.Vehicle),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VehiclesResolver.prototype, "vehicle", null);
__decorate([
    (0, graphql_1.Mutation)(() => position_entity_1.GpsPosition),
    __param(0, (0, graphql_1.Args)('vehicleId')),
    __param(1, (0, graphql_1.Args)('latitude', { type: () => graphql_1.Float })),
    __param(2, (0, graphql_1.Args)('longitude', { type: () => graphql_1.Float })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], VehiclesResolver.prototype, "addGpsPosition", null);
__decorate([
    (0, graphql_1.Query)(() => [position_entity_1.GpsPosition]),
    __param(0, (0, graphql_1.Args)('vehicleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VehiclesResolver.prototype, "vehicleHistory", null);
exports.VehiclesResolver = VehiclesResolver = __decorate([
    (0, graphql_1.Resolver)(() => vehicle_entity_1.Vehicle),
    __metadata("design:paramtypes", [vehicles_service_1.VehiclesService])
], VehiclesResolver);
//# sourceMappingURL=vehicles.resolver.js.map