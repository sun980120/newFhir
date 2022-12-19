import { DataSource } from 'typeorm';
import config from 'config';

const dbConfig = config.get('db');

export const AppDataSource = new DataSource({
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    synchronize: dbConfig.synchronize,
    logging: dbConfig.logging,
    entities: [__dirname + '/api/**/**.entity.ts'],
    migrations: [],
    subscribers: [],
});