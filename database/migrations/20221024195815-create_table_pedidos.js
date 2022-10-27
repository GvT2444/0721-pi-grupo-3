
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'pedidos',
      {
        id:{
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        clientes_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'clientes'
            },
            key: "id"
          }
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};
