'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('holbies', {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      gender: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      about_me: {
        type: DataTypes.STRING(700),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(50),
      },
      strengths: {
        type: DataTypes.STRING(500),
      },
      skills: {
        type: DataTypes.STRING(500),
      },
      most_amazing_thing: {
        type: DataTypes.STRING(500),
      },
      previous_education: {
        type: DataTypes.STRING(500),
      },
      technologies: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      industries: {
        type: DataTypes.STRING(200)
      },
      linkedin: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      github: {
        type: DataTypes.STRING(200)
      },
      capstoneProjectId: {
        type: DataTypes.UUID,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('holbies');
  }
};