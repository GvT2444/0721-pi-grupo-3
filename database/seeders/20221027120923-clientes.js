'use strict';

const clientes = [
  {
    id: 1,
    nome: "rhuan victor"
  },
  {
    id: 2,
    nome: "ryee ferreira"
  },
  {
    id: 3,
    nome: "duda alves"
  },
  {
    id: 4,
    nome: "natflix"
  },
  {
    id: 5,
    nome: "luiz algusto"
  }, {
    id: 6,
    nome: "Gus da gameplay advanced"
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', clientes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
