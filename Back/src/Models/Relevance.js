const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('lenguages', {//creación de la tabla de empresas
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    plan: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    filter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
    },
    team: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
    },
  });
};