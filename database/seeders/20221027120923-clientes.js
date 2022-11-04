'use strict';

const clientes = [
  {
    id: 1,
    nome: "rhuan victor",
    email: "rhuanramos762@gmail.com",
    senha: "86533820"
  },
  {
    id: 2,
    nome: "ryee ferreira",
    email: "ryeeferreira762@gmail.com",
    senha: "745869"
  },
  {
    id: 3,
    nome: "duda alves",
    email: "dudalves762@gmail.com",
    senha: "86533822"
  },
  {
    id: 4,
    nome: "natflix",
    email: "natflix762@gmail.com",
    senha: "86533823"
  },
  {
    id: 5,
    nome: "luiz algusto",
    email: "luiz762@gmail.com",
    senha: "86533824"
  }, 
  {
    id: 6,
    nome: "Gus da gameplay advanced",
    email: "gustavo762@gmail.com",
    senha: "86533825"
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
