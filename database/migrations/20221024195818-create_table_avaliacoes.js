
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'avaliacoes',
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
        nota: {
          type:Sequelize.DataTypes.TINYINT
        }
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacoes');
  }
};
