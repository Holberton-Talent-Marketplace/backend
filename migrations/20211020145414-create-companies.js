'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      about_us: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(500)
      },
      technologies: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      contact_link: {
        type: DataTypes.STRING
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
    await queryInterface.dropTable('companies');
  }
};