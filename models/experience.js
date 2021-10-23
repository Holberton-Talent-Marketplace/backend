'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experience extends Model {
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
  experience.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    holbieId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'experience',
    tableName: 'experiences'
  });
  return experience;
};