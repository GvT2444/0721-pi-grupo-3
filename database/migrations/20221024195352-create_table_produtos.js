
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'produtos',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        imagem: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: true,
        },
        nome: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        },
        preco: {
          type: Sequelize.DataTypes.DECIMAL(6,2),
          allowNull: false,
        }
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};