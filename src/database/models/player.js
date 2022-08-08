const createPlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
  }, {
    tableName: 'players',
    underscored: true,
  });

  Player.associate = (models) => {
    Player.belongsTo(models.Team, { foreignKey: 'teamId', as: 'team' });
  };

  return Player;
};

module.exports = createPlayerModel;