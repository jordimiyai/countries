const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Cannot be null" },
          notEmpty: true
        },
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
          isInt: true,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM("Autumn", "Winter", "Spring", "Summer"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
