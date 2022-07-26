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
        field: 'match_id',
        references: {
          model: 'matches',
          key: 'id'
        },
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'event_id',
        references: {
          model: 'events',
          key: 'id'
        },
      },
      eventPlayerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'event_player_id',
        references: {
          model: 'players',
          key: 'id'
        },
      },
      hasAssist: {
        type: Sequelize.BOOLEAN,
        field: 'has_assist'
      },
      assistPlayerId: {
        type: Sequelize.INTEGER,
        field: 'assist_player_id',
        references: {
          model: 'players',
          key: 'id'
        },
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