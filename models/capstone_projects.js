'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class capstone_projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { companies, holbie } ) {
      this.belongsTo(companies, { foreignKey: 'companyId', as: 'company' })
      this.hasMany(holbie, { foreignKey: 'capstoneProjectId', as: 'holbies' })
    }
  };
  capstone_projects.init({
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
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    technologies: {
      type: DataTypes.STRING,
    },
    holbiesCohort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    projectUrl:{
      type: DataTypes.STRING,
    },
    companyId: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'capstone_projects',
    tableName: 'capstone_projects'
  });
  return capstone_projects;
};