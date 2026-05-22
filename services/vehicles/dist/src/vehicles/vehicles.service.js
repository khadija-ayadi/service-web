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
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vehicle_entity_1 = require("./vehicle.entity");
const position_entity_1 = require("../positions/position.entity");
let VehiclesService = class VehiclesService {
    vehiclesRepo;
    positionsRepo;
    constructor(vehiclesRepo, positionsRepo) {
        this.vehiclesRepo = vehiclesRepo;
        this.positionsRepo = positionsRepo;
    }
    async create(input) {
        const vehicle = this.vehiclesRepo.create(input);
        return this.vehiclesRepo.save(vehicle);
    }
    async findAll() {
        return this.vehiclesRepo.find();
    }
    async findOne(id) {
        const vehicle = await this.vehiclesRepo.findOne({ where: { id } });
        if (!vehicle)
            throw new common_1.NotFoundException(`Vehicle ${id} not found`);
        return vehicle;
    }
    async addPosition(vehicleId, latitude, longitude) {
        await this.findOne(vehicleId);
        const position = this.positionsRepo.create({ vehicleId, latitude, longitude });
        return this.positionsRepo.save(position);
    }
    async getHistory(vehicleId) {
        return this.positionsRepo.find({
            where: { vehicleId },
            order: { recordedAt: 'DESC' },
        });
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_entity_1.Vehicle)),
    __param(1, (0, typeorm_1.InjectRepository)(position_entity_1.GpsPosition)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map