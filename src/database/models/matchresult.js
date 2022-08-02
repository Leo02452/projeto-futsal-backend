const createMatchResultModel = (sequelize, DataTypes) => {
  const MatchResult = sequelize.define('MatchResult', {
    matchId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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

  MatchResult.associate = (models) => {
    MatchResult.belongsTo(models.Match, { foreignKey: 'matchId', as: 'match' });
  };

  return MatchResult;
};

module.exports = createMatchResultModel;