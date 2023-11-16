'use strict';

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Helio',
      email: 'helio.junior.ads#gmail.com',
      password: await bcrypt.hash('12345', 8),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    
  }
};
