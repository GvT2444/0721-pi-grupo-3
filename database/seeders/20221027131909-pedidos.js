'use strict';

const pedidos = [
  {
    id: 1,
    clientes_id: 1,
    valor: 1999.99,
    endereco: "rua seila das quantas",
    status: 1,
  },
  {
    id: 2,
    clientes_id: 2,
    valor: 1999.99,
    endereco: "rua seila das quantas",
    status: 1,
  },
  {
    id: 3,
    clientes_id: 3,
    valor: 1999.99,
    endereco: "rua seila das quantas",
    status: 1,
  },
  {
    id: 4,
    clientes_id: 4,
    valor: 1999.99,
    endereco: "rua seila das quantas",
    status: 1,
  },
  {
    id: 5,
    clientes_id: 5,
    valor: 1999.99,
    endereco: "rua seila das quantas",
    status: 1,
  },
]

  module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pedidos', pedidos, {});
    },

    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('pedidos', null, {});
    }
  };
