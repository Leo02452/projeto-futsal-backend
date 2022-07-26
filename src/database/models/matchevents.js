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

  return MatchEvent;
};

module.exports = createMatchEventModel;