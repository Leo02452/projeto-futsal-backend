const createMatchModel = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    date: DataTypes.DATE,
    local: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    opponent: DataTypes.STRING,
  }, {
    tableName: 'matches',
    underscored: true,
  });

  Match.associate = (models) => {
    Match.belongsTo(models.Team, { foreignKey: 'teamId', as: 'team' });
    Match.hasOne(models.MatchResult, { foreignKey: 'matchId', as: 'matchResult' });
  };

  return Match;
};

module.exports = createMatchModel;