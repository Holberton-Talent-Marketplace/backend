'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class holbie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  holbie.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    most_amazing_thing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technologies: DataTypes.STRING,
    industries: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'holbie',
    tableName: 'holbies',
  });
  return holbie;
};