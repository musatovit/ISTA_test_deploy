const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emailform extends Model {
    static associate() {}
  }
  Emailform.init(
    {
      email: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Emailform',
    }
  );
  return Emailform;
};
