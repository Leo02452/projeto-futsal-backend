const createPlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
  }, {
    tableName: 'players',
    underscored: true,
  });

  return Player;
};

module.exports = createPlayerModel;