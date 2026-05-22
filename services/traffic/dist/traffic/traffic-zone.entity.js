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
exports.TrafficZone = exports.TrafficDensity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
var TrafficDensity;
(function (TrafficDensity) {
    TrafficDensity["LOW"] = "LOW";
    TrafficDensity["MEDIUM"] = "MEDIUM";
    TrafficDensity["HIGH"] = "HIGH";
})(TrafficDensity || (exports.TrafficDensity = TrafficDensity = {}));
(0, graphql_1.registerEnumType)(TrafficDensity, { name: 'TrafficDensity' });
let TrafficZone = class TrafficZone {
    id;
    name;
    latitude;
    longitude;
    vehicleCount;
    density;
    createdAt;
    updatedAt;
};
exports.TrafficZone = TrafficZone;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TrafficZone.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TrafficZone.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 7 }),
    __metadata("design:type", Number)
], TrafficZone.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 7 }),
    __metadata("design:type", Number)
], TrafficZone.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TrafficZone.prototype, "vehicleCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => TrafficDensity),
    (0, typeorm_1.Column)({ type: 'enum', enum: TrafficDensity, default: TrafficDensity.LOW }),
    __metadata("design:type", String)
], TrafficZone.prototype, "density", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TrafficZone.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TrafficZone.prototype, "updatedAt", void 0);
exports.TrafficZone = TrafficZone = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('traffic_zones')
], TrafficZone);
//# sourceMappingURL=traffic-zone.entity.js.map