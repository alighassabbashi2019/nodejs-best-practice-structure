import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
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
}

export const dataSource = new DataSource(dataSourceOptions);
