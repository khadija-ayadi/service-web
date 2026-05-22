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
exports.UpdateIncidentStatusInput = exports.CreateIncidentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const incident_entity_1 = require("../incident.entity");
let CreateIncidentInput = class CreateIncidentInput {
    title;
    location;
    type;
    description;
    reportedBy;
};
exports.CreateIncidentInput = CreateIncidentInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncidentInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncidentInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => incident_entity_1.IncidentType),
    (0, class_validator_1.IsEnum)(incident_entity_1.IncidentType),
    __metadata("design:type", String)
], CreateIncidentInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIncidentInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncidentInput.prototype, "reportedBy", void 0);
exports.CreateIncidentInput = CreateIncidentInput = __decorate([
    (0, graphql_1.InputType)()
], CreateIncidentInput);
let UpdateIncidentStatusInput = class UpdateIncidentStatusInput {
    id;
    status;
};
exports.UpdateIncidentStatusInput = UpdateIncidentStatusInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIncidentStatusInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => incident_entity_1.IncidentStatus),
    (0, class_validator_1.IsEnum)(incident_entity_1.IncidentStatus),
    __metadata("design:type", String)
], UpdateIncidentStatusInput.prototype, "status", void 0);
exports.UpdateIncidentStatusInput = UpdateIncidentStatusInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateIncidentStatusInput);
//# sourceMappingURL=incident.dto.js.map