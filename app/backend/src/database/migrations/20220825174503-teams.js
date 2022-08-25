'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', 
    { id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allownull: false,
      autoIncrement: true
    },
    teamName: {
      type: Sequelize.STRING,
      field:'team_name',
      allownull: false
    } 
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('teams');   
  }
};
