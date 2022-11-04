
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'clientes',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        },
        senha:{
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        }
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};