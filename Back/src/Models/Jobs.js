const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('job', {//creación de la tabla de trabajos publicados
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: '',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: '',
    },
    requires: {
      type: DataTypes.ARRAY,
      allowNull: false,
      unique: false,
      defaultValue: [],
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      unique: false,
      defaultValue: '',
    },
    salary: {
      type: DataTypes.INT(7),
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },
  });
};