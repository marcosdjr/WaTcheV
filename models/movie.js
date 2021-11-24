const database = require("../database");
const Sequelize = require("sequelize");

const Movie = database.define(
  "movielist",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    direction: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    releasedate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cover: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    moviecomments: Sequelize.STRING,
      
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Movie;
