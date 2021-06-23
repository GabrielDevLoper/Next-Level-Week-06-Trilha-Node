module.exports = {
    type: "mysql",
    port: 3306,
    host: "localhost",
    username: "root",
    password: "password",
    database: "nlw6",
    logging: true,
    entities: ["src/models/**/**.ts"],
    migrations: ["src/database/migrations/*.ts"],
    cli: {
        entitiesDir: "src/models",
        migrationsDir: "./src/database/migrations",
    },
};
