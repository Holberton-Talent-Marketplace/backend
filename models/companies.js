'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  companies.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    about_us: DataTypes.STRING,
    location: DataTypes.STRING,
    technologies: DataTypes.STRING,
    contact_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};