
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
        valor: {
          type: Sequelize.DataTypes.DECIMAL(6,2),
          allowNull: false
        },
        endereco: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        },
        status: {
          type: Sequelize.DataTypes.DECIMAL(1),
          allowNull: true
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};
