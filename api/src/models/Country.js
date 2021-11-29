const { DataTypes } = require("sequelize");
const { STRING } = require("sequelize/lib/data-types");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [3],
          notNull: { msg: "Cannot be null" },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: { ignore: "s" },
          notNull: { msg: "Cannot be null" },
          notEmpty: true,
          notBlank: true,
        },
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Cannot be null" },
          isUrl: true,
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: (true, { ignore: "s" }),
          notNull: { msg: "Cannot be null" },
          notEmpty: true,
          notBlank: true,
        },
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Cannot be null" },
        },
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.FLOAT,
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
