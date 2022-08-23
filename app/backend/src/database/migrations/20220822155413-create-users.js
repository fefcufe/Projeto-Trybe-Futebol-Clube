'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      username: { 
        type: Sequelize.STRING, 
      },
      role: Sequelize.STRING, 
      email: Sequelize.STRING,
      password: Sequelize.STRING,

    });
   
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};
