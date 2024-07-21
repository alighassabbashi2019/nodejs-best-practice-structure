"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dataSourceOptions = void 0;
var typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aligh1375??@',
    database: 'table-reservation',
    synchronize: true,
    logging: ["query", "error", "info"],
    entities: ["**/*.entity{.ts,.js}"],
    migrations: ['**/*.migration{.ts,.js}'],
};
exports.dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
