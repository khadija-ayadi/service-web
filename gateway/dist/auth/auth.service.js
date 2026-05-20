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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
let AuthService = class AuthService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async register(input) {
        try {
            const query = `
        mutation Register($input: RegisterInput!) {
          register(input: $input) {
            token
            user { id email name role createdAt }
          }
        }
      `;
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${AUTH_SERVICE_URL}/graphql`, {
                query,
                variables: { input },
            }));
            if (data.errors)
                throw new common_1.HttpException(data.errors[0].message, 400);
            return data.data.register;
        }
        catch (e) {
            throw new common_1.HttpException(e.message || 'Auth service error', 500);
        }
    }
    async login(input) {
        try {
            const query = `
        mutation Login($input: LoginInput!) {
          login(input: $input) {
            token
            user { id email name role createdAt }
          }
        }
      `;
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${AUTH_SERVICE_URL}/graphql`, {
                query,
                variables: { input },
            }));
            if (data.errors)
                throw new common_1.HttpException(data.errors[0].message, 400);
            return data.data.login;
        }
        catch (e) {
            throw new common_1.HttpException(e.message || 'Auth service error', 500);
        }
    }
    async validateToken(token) {
        try {
            const query = `query { me { id email name role } }`;
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${AUTH_SERVICE_URL}/graphql`, { query }, { headers: { Authorization: `Bearer ${token}` } }));
            if (data.errors)
                return null;
            return data.data.me;
        }
        catch {
            return null;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AuthService);
//# sourceMappingURL=auth.service.js.map