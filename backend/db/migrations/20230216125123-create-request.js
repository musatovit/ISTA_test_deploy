module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      phone: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      data: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Requests');
  }
};