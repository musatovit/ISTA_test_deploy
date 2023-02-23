'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhoneForm extends Model {
    static associate(models) {
      // define association here
    }
  }
  PhoneForm.init(
    {
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PhoneForm',
    }
  );
  return PhoneForm;
};
