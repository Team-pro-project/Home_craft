'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Living Room',
        description: 'Furniture and decor for living spaces',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bedroom',
        description: 'Furniture and decor for sleeping areas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dining Room',
        description: 'Furniture and decor for dining areas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Office',
        description: 'Furniture and decor for work spaces',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
}; 