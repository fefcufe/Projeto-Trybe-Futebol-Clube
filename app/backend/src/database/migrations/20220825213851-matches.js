'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
    homeTeam: {
      type: Sequelize.INTEGER,
      field: 'home_team',
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'teams', //nome da TABELA
        key: 'id',
      }
      },
    homeTeamGoals: {
      type: Sequelize.INTEGER,
      field: 'home_team_goals',
      allowNull: false,
    },
    awayTeam: {
      type: Sequelize.INTEGER,
      field: 'away_team',
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'teams', //nome da TABELA
        key: 'id',
      }
    },
    awayTeamGoals: {
      type: Sequelize.INTEGER,
      field: 'away_team_goals',
      allowNull: false,
    },
    inProgress: {
      type: Sequelize.BOOLEAN,
      field: 'in_progress',
      allowNull: false
    },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');   
  }
};
