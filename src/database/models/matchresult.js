const createMatchResultModel = (sequelize, DataTypes) => {
  const MatchResult = sequelize.define('MatchResult', {
    matchId: DataTypes.INTEGER,
    secondTeamScore: DataTypes.INTEGER,
    secondOppScore: DataTypes.INTEGER,
    secondResult: DataTypes.INTEGER,
    secondTeamFoul: DataTypes.INTEGER,
    secondOppFoul: DataTypes.INTEGER,
    firstTeamScore: DataTypes.INTEGER,
    firstOppScore: DataTypes.INTEGER,
    firstResult: DataTypes.INTEGER,
    firstTeamFoul: DataTypes.INTEGER,
    firstOppFoul: DataTypes.INTEGER,
  }, {
    tableName: 'match_results',
    underscored: true
  });

  return MatchResult;
};

module.exports = createMatchResultModel;