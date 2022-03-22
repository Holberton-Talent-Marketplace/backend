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
    static associate({ experience, projects, capstone_projects }) {
      // define association here
      this.hasMany(experience, { foreignKey: 'holbieId', onDelete: 'cascade', hooks: true, as: 'experiences' })
      this.hasMany(projects, { foreignKey: 'holbieId', onDelete: 'cascade', hooks: true, as: 'projects' })
      this.belongsTo(capstone_projects, { foreignKey: 'capstoneProjectId', as: 'capstoneProjects' })
    }
  };
  holbie.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Holbie must have a gender' },
        notEmpty: { msg: 'gender must not be empty' },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Holbie must have a name' },
        notEmpty: { msg: 'Name must not be empty' },
      },
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Holbie must have a about_me' },
        notEmpty: { msg: 'about_me must not be empty' },
      },
    },
    location: {
      type: DataTypes.STRING,
    },
    strengths: {
      type: DataTypes.STRING,
    },
    skills: {
      type: DataTypes.STRING,
    },
    most_amazing_thing: {
      type: DataTypes.STRING,
    },
    previous_education: {
      type: DataTypes.STRING,
    },
    technologies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    industries: DataTypes.STRING,
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Holbie must have a linkedin' },
        notEmpty: { msg: 'Linkedin must not be empty' },
      },
    },
    github: {
      type: DataTypes.STRING
    },
    capstoneProjectId: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'holbie',
    tableName: 'holbies',
  });
  return holbie;
};