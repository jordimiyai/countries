const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: { ignore: "\s" },
            notNull: {msg: 'Cannot be null'},
            notEmpty: true,
            notBlank: true,
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
        type: DataTypes.ENUM("autumn", "winter", "spring", "summer"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
