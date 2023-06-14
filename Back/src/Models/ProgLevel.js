const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('programminglevel', {//creación de la tabla de empresas
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
  });
};