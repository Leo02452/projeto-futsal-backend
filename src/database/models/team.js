const createTeamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    tableName: 'teams',
    underscored: true
  });

  Team.associate = (models) => {
    Team.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Team.hasMany(models.Match, { foreignKey: 'teamId', as: 'matches' });
    Team.hasMany(models.Player, { foreignKey: 'teamId', as: 'players' });
  };

  return Team;
};

module.exports = createTeamModel;