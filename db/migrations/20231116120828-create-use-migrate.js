'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.createTable("users",{
      id: {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      image: {
        type: Sequelize.STRING,
        allowNull:true
      }, 
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false
      }
    })
   
  },

  async down (queryInterface, Sequelize) {
    
  }
};
