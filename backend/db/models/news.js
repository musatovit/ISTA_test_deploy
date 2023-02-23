const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  New.init(
    {
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "New",
    }
  );
  return New;
};
