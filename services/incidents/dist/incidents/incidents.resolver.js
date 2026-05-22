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
exports.IncidentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const incidents_service_1 = require("./incidents.service");
const incident_entity_1 = require("./incident.entity");
const incident_dto_1 = require("./dto/incident.dto");
let IncidentsResolver = class IncidentsResolver {
    incidentsService;
    constructor(incidentsService) {
        this.incidentsService = incidentsService;
    }
    async createIncident(input) {
        return this.incidentsService.create(input);
    }
    async incidents() {
        return this.incidentsService.findAll();
    }
    async incident(id) {
        return this.incidentsService.findOne(id);
    }
    async updateIncidentStatus(input) {
        return this.incidentsService.updateStatus(input);
    }
};
exports.IncidentsResolver = IncidentsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => incident_entity_1.Incident),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [incident_dto_1.CreateIncidentInput]),
    __metadata("design:returntype", Promise)
], IncidentsResolver.prototype, "createIncident", null);
__decorate([
    (0, graphql_1.Query)(() => [incident_entity_1.Incident]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IncidentsResolver.prototype, "incidents", null);
__decorate([
    (0, graphql_1.Query)(() => incident_entity_1.Incident),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncidentsResolver.prototype, "incident", null);
__decorate([
    (0, graphql_1.Mutation)(() => incident_entity_1.Incident),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [incident_dto_1.UpdateIncidentStatusInput]),
    __metadata("design:returntype", Promise)
], IncidentsResolver.prototype, "updateIncidentStatus", null);
exports.IncidentsResolver = IncidentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => incident_entity_1.Incident),
    __metadata("design:paramtypes", [incidents_service_1.IncidentsService])
], IncidentsResolver);
//# sourceMappingURL=incidents.resolver.js.map