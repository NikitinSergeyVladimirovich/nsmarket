import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Product } from "@/app/models/products.model";

const options: SequelizeOptions = {
    username: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres",
    dialect: "postgres",
    repositoryMode: true,
    models: [
        Product,
    ],
};

const sequelize = new Sequelize({
    username: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres",
    dialect: "postgres",
    repositoryMode: true,
  
});

export default sequelize;

