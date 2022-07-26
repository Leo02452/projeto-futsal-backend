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

  return Match;
};

module.exports = createMatchModel;