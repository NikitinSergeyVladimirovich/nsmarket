let options = {
    dialect: "postgres",
    define: "postgres",
    migrationStorageTableName: "migrations",
    username: "postgres",
    password: "postgres",
    database: "postgres",
    host: "localhost",
    port: "5432",
    logging: false,
};

module.exports = {
    "development": options,
};
