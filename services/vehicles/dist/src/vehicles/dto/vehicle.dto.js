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
exports.CreateVehicleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const vehicle_entity_1 = require("../vehicle.entity");
let CreateVehicleInput = class CreateVehicleInput {
    plateNumber;
    model;
    type;
    ownerId;
};
exports.CreateVehicleInput = CreateVehicleInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleInput.prototype, "plateNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleInput.prototype, "model", void 0);
__decorate([
    (0, graphql_1.Field)(() => vehicle_entity_1.VehicleType),
    (0, class_validator_1.IsEnum)(vehicle_entity_1.VehicleType),
    __metadata("design:type", String)
], CreateVehicleInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehicleInput.prototype, "ownerId", void 0);
exports.CreateVehicleInput = CreateVehicleInput = __decorate([
    (0, graphql_1.InputType)()
], CreateVehicleInput);
//# sourceMappingURL=vehicle.dto.js.map