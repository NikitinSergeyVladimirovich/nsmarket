import { Sequelize } from "sequelize-typescript";
// import Test from "../../../../app/models/test"

const sequelize = new Sequelize({
    database: "postgres",
    dialect: "postgres",
    host: "localhost",
    password: "postgres",
    port: 5432,
    username: "postgres",
    logging: false,
    repositoryMode: true,
    storage: ':memory:',
});

export default sequelize;

