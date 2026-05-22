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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpsPosition = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const vehicle_entity_1 = require("../vehicles/vehicle.entity");
let GpsPosition = class GpsPosition {
    id;
    latitude;
    longitude;
    vehicleId;
    vehicle;
    recordedAt;
};
exports.GpsPosition = GpsPosition;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GpsPosition.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 7 }),
    __metadata("design:type", Number)
], GpsPosition.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 7 }),
    __metadata("design:type", Number)
], GpsPosition.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GpsPosition.prototype, "vehicleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vehicle_entity_1.Vehicle, (vehicle) => vehicle.positions),
    (0, typeorm_1.JoinColumn)({ name: 'vehicleId' }),
    __metadata("design:type", vehicle_entity_1.Vehicle)
], GpsPosition.prototype, "vehicle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GpsPosition.prototype, "recordedAt", void 0);
exports.GpsPosition = GpsPosition = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('gps_positions')
], GpsPosition);
//# sourceMappingURL=position.entity.js.map