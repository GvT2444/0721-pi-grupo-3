'use strict';

const produtos = [
  {
    id: 1,
    nome:"produto1",
    preco: 1999.99
  },
  {
    id: 2,
    nome:"produto2",
    preco: 2999.99
  },
  {
    id: 3,
    nome:"produto3",
    preco: 3999.99
  },
  {
    id: 4,
    nome:"produto4",
    preco: 4999.99
  },
  {
    id: 5,
    nome:"produto5",
    preco: 5999.99
  },
]

module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('produtos', produtos, {});
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('produtos', null, {});
    }
};
