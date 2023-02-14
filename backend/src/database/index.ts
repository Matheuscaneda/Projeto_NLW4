import { DataSource } from 'typeorm';

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "fanny.db.elephantsql.com",
    port: 5432,
    username: "uucrphln",
    password: "Onz2YbNP34MTXEDHpCkA3yNlg-B81Wa0",
    database: "uucrphln",
    entities: ["/entities/*.ts"
    ],
    migrations: ["/migrations./*.ts"],
    uuidExtension: 'uuid-ossp',
})

