const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('user', {//creación de la tabla de usuarios
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
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    secondname: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    secondlastname: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    birth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    working: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: true,
    },
    cv: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    enfoque1: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    enfoque2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    aboutme: {
      type: DataTypes.TEXT(500),
      allowNull: false,
      unique: true,
    },
    experiencia: {
      type: DataTypes.ARRAY,
      allowNull: false,
      unique: true,
    },
    titulos: {
      type: DataTypes.ARRAY,
      allowNull: false,
      unique: true,
    },
    conocimientos: {
      type: DataTypes.ARRAY,
      allowNull: false,
      unique: true,
    },
  });
};