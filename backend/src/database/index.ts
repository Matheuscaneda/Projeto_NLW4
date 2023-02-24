import { DataSource } from 'typeorm';

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "suleiman.db.elephantsql.com",
    port: 5432,
    username: "vuwhulxs",
    synchronize: true,
    password: "KfV6lvoy8AeZrzRPexiB-x6YQ6DNgx6v",
    database: "vuwhulxs",
    entities: ['./src/database/entities/*.{ts,js}'],
    migrations: [`${__dirname}/**/database/migrations/*.{ts,js}`],
    uuidExtension: 'uuid-ossp',
})

