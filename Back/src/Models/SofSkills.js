const { DataTypes } = require('sequelize');//configurar sequelize
module.exports = (sequelize) => {
  sequelize.define('softskills', {//creación de la tabla de las soft skills
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
  });
};