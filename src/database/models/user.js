const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasOne(models.Team, { foreignKey: 'userId', as: 'team' });
  };

  return User;
};

module.exports = createUserModel;