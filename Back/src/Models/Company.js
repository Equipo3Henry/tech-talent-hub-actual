const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('company', {//creación de la tabla de empresas
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
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: '',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: '',
    },
    employes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
      defaultValue: 0,
    },
    jobs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
      autoIncrement: true,
      defaultValue: 0,
    },
  });
};