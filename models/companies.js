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
    static associate( { capstone_projects } ) {
      // define association here
      this.hasMany(capstone_projects, { foreignKey: 'companyId', as: 'capstone_projects' })
    }
  };
  companies.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Company must have a name' },
        notEmpty: { msg: 'Name must not be empty' },
      },
    },
    about_us: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Company must have a about_us' },
        notEmpty: { msg: 'about_us must not be empty' },
      },
    },
    location: DataTypes.STRING,
    technologies: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Company must have technologies' },
        notEmpty: { msg: 'technologies must not be empty' },
      },
    },
    contact_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};