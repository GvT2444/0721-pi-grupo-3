
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'pedidos_tem_produtos',
      {
        produtos_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'produtos'
            },
            key: "id"
          }
        },
        pedidos_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'pedidos'
            },
            key: "id"
          }
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos_tem_produtos');
  }
};
