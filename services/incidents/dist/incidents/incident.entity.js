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
exports.Incident = exports.IncidentStatus = exports.IncidentType = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
var IncidentType;
(function (IncidentType) {
    IncidentType["ACCIDENT"] = "ACCIDENT";
    IncidentType["WORKS"] = "WORKS";
    IncidentType["CLOSED_ROAD"] = "CLOSED_ROAD";
    IncidentType["TRAFFIC_JAM"] = "TRAFFIC_JAM";
})(IncidentType || (exports.IncidentType = IncidentType = {}));
var IncidentStatus;
(function (IncidentStatus) {
    IncidentStatus["REPORTED"] = "REPORTED";
    IncidentStatus["IN_PROGRESS"] = "IN_PROGRESS";
    IncidentStatus["RESOLVED"] = "RESOLVED";
})(IncidentStatus || (exports.IncidentStatus = IncidentStatus = {}));
(0, graphql_1.registerEnumType)(IncidentType, { name: 'IncidentType' });
(0, graphql_1.registerEnumType)(IncidentStatus, { name: 'IncidentStatus' });
let Incident = class Incident {
    id;
    title;
    location;
    type;
    status;
    description;
    reportedBy;
    createdAt;
    updatedAt;
};
exports.Incident = Incident;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Incident.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Incident.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Incident.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => IncidentType),
    (0, typeorm_1.Column)({ type: 'enum', enum: IncidentType }),
    __metadata("design:type", String)
], Incident.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => IncidentStatus),
    (0, typeorm_1.Column)({ type: 'enum', enum: IncidentStatus, default: IncidentStatus.REPORTED }),
    __metadata("design:type", String)
], Incident.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Incident.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Incident.prototype, "reportedBy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Incident.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Incident.prototype, "updatedAt", void 0);
exports.Incident = Incident = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('incidents')
], Incident);
//# sourceMappingURL=incident.entity.js.map