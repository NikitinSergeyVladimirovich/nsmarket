const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

const Project = sequelize.define("Project", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  });