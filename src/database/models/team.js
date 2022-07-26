const createTeamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    tableName: 'teams',
    underscored: true
  });

  return Team;
};

module.exports = createTeamModel;