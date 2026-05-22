"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const traffic_module_1 = require("./traffic/traffic.module");
const traffic_zone_entity_1 = require("./traffic/traffic-zone.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get('DB_HOST', 'localhost'),
                    port: config.get('DB_PORT', 3306),
                    username: config.get('DB_USER', 'root'),
                    password: config.get('DB_PASS') || '',
                    database: config.get('DB_NAME', 'urban_traffic'),
                    entities: [traffic_zone_entity_1.TrafficZone],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                context: ({ req }) => ({ req }),
                playground: true,
            }),
            traffic_module_1.TrafficModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map