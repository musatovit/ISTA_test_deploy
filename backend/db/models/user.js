const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, New }) {
      this.hasMany(Post, { foreignKey: 'userId' });
      this.hasMany(New, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      userName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
