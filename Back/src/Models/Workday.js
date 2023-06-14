const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('workday', {//creación de la tabla de empresas
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
  });
};