'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Description extends Model {
    
    static associate({User}) {
    this.belongsTo(User, {foreignKey:'userId'})
    }
  }
  Description.init({
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
   
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Description',
  });
  return Description;
};