'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        quantity: 1,
        totalPrice: 999.99,
        status: 'delivered',
        userId: 2, // John Doe
        productId: 1, // Modern Sofa
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 2,
        totalPrice: 1199.98,
        status: 'shipped',
        userId: 3, // Jane Smith
        productId: 2, // Dining Table
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 1,
        totalPrice: 599.99,
        status: 'pending',
        userId: 2, // John Doe
        productId: 4, // Desk Chair
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 3,
        totalPrice: 449.97,
        status: 'cancelled',
        userId: 3, // Jane Smith
        productId: 6, // Floor Lamp
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
}; 