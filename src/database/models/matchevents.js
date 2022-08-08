const createMatchEventModel = (sequelize, DataTypes) => {
  const MatchEvent = sequelize.define('MatchEvent', {
    matchId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    eventPlayerId: DataTypes.INTEGER,
    hasAssist: DataTypes.BOOLEAN,
    assistPlayerId: DataTypes.INTEGER,
    game: DataTypes.STRING, 
  }, {
    tableName: 'match_events',
    underscored: true
  });

  MatchEvent.associate = (models) => {
    models.Match.hasMany(models.Event, {
      foreignKey: 'matchId',
      as: 'events',
      otherKey: 'eventId',
      through: MatchEvent,
    });

    models.Event.belongsToMany(models.Match, {
      foreignKey: 'eventId',
      as: 'matches',
      otherKey: 'matchId',
      through: MatchEvent,
    });

    models.Match.hasMany(models.Player, {
      foreignKey: 'matchId',
      as: 'players',
      otherKey: 'eventPlayerId',
      through: MatchEvent,
    });

    models.Player.belongsToMany(models.Match, {
      foreignKey: 'eventPlayerId',
      as: 'matches',
      otherKey: 'matchId',
      through: MatchEvent,
    });

    models.Match.hasMany(models.Player, {
      foreignKey: 'matchId',
      as: 'players',
      otherKey: 'assistPlayerId',
      through: MatchEvent,
    });

    models.Player.belongsToMany(models.Match, {
      foreignKey: 'assistPlayerId',
      as: 'matches',
      otherKey: 'matchId',
      through: MatchEvent,
    });
  };

  return MatchEvent;
};

module.exports = createMatchEventModel;
