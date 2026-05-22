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
exports.NotificationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const notifications_service_1 = require("./notifications.service");
const notification_entity_1 = require("./notification.entity");
let NotificationsResolver = class NotificationsResolver {
    notifService;
    constructor(notifService) {
        this.notifService = notifService;
    }
    async sendNotification(title, message, userId) {
        return this.notifService.send(title, message, userId);
    }
    async notifications(userId) {
        return this.notifService.findAll(userId);
    }
    async markNotificationAsRead(id) {
        return this.notifService.markAsRead(id);
    }
};
exports.NotificationsResolver = NotificationsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => notification_entity_1.Notification),
    __param(0, (0, graphql_1.Args)('title')),
    __param(1, (0, graphql_1.Args)('message')),
    __param(2, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], NotificationsResolver.prototype, "sendNotification", null);
__decorate([
    (0, graphql_1.Query)(() => [notification_entity_1.Notification]),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsResolver.prototype, "notifications", null);
__decorate([
    (0, graphql_1.Mutation)(() => notification_entity_1.Notification),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsResolver.prototype, "markNotificationAsRead", null);
exports.NotificationsResolver = NotificationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => notification_entity_1.Notification),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsResolver);
//# sourceMappingURL=notifications.resolver.js.map