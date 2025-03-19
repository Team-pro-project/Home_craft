'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Modern Sofa',
        description: 'Comfortable 3-seater sofa with clean lines',
        type: 'sofa',
        price: 999.99,
        stock: 10,
        imageUrl: 'https://example.com/sofa.jpg',
        categoryId: 1, // Living Room
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dining Table',
        description: 'Wooden dining table seats 6',
        type: 'table',
        price: 599.99,
        stock: 5,
        imageUrl: 'https://example.com/table.jpg',
        categoryId: 3, // Dining Room
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bed Frame',
        description: 'Queen size bed frame with headboard',
        type: 'bed',
        price: 799.99,
        stock: 8,
        imageUrl: 'https://example.com/bed.jpg',
        categoryId: 2, // Bedroom
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desk Chair',
        description: 'Ergonomic office chair',
        type: 'chair',
        price: 199.99,
        stock: 15,
        imageUrl: 'https://example.com/chair.jpg',
        categoryId: 4, // Office
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Area Rug',
        description: 'Modern geometric pattern rug',
        type: 'rug',
        price: 299.99,
        stock: 12,
        imageUrl: 'https://example.com/rug.jpg',
        categoryId: 1, // Living Room
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Floor Lamp',
        description: 'Contemporary floor lamp with adjustable head',
        type: 'light',
        price: 149.99,
        stock: 20,
        imageUrl: 'https://example.com/lamp.jpg',
        categoryId: 1, // Living Room
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
}; 