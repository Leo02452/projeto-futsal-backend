const createEventModel = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
  }, {
    tableName: 'events',
    underscored: true
  });

  return Event;
};

module.exports = createEventModel;