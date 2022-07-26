'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('match_results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'match_id'
      },
      secondTeamScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'second_team_score'
      },
      secondOppScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'second_opp_score'
      },
      secondResult: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'second_result'
      },
      secondTeamFoul: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'second_team_foul'
      },
      secondOppFoul: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'second_opp_foul'
      },
      firstTeamScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'first_team_score'
      },
      firstOppScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'first_opp_score'
      },
      firstResult: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'first_result'
      },
      firstTeamFoul: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'first_team_foul'
      },
      firstOppFoul: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'first_opp_foul'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('match_results');
  }
};