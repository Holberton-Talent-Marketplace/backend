'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ holbie }) {
      // define association here
      this.belongsTo(holbie, { foreignKey: 'holbieId', as: 'holbie' })
    }
  };
  projects.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    technologiesUsed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkToProject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    holbieId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'projects',
    tableName: 'projects'
  });
  return projects;
};