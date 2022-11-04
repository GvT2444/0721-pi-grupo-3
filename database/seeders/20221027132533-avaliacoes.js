'use strict';

const avaliacoes = [
  {
    id: 1,
    produtos_id: 1,
    clientes_id: 1,
    nota: 5
  },
  {
    id: 2,
    produtos_id: 2,
    clientes_id: 2,
    nota: 4
  },
  {
    id: 3,
    produtos_id: 3,
    clientes_id: 3,
    nota: 4
  },
  {
    id: 4,
    produtos_id: 4,
    clientes_id: 4,
    nota: 5
  },
  {
    id: 5,
    produtos_id: 5,
    clientes_id: 5,
    nota: 2
  },
]

  module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('avaliacoes', avaliacoes, {});
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('avaliacoes', null, {});
    }
  };
