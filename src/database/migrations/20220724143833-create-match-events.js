'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('match_events', {
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
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'event_id'
      },
      eventPlayerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'event_player_id'
      },
      hasAssist: {
        type: Sequelize.BOOLEAN,
        field: 'has_assist'
      },
      assistPlayerId: {
        type: Sequelize.INTEGER,
        field: 'assist_player_id'
      },
      game: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('match_events');
  }
};