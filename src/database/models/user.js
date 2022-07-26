const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
  });

  return User;
};

module.exports = createUserModel;