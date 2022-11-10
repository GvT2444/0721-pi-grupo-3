'use strict';
const bcrypt = require('bcrypt');
const clientes = [
  {
    id: 1,
    nome: "rhuan victor",
    email: "rhuanramos762@gmail.com",
    senha: bcrypt.hashSync("86533820", 10)
  },
  {
    id: 2,
    nome: "ryee ferreira",
    email: "ryeeferreira762@gmail.com",
    senha: bcrypt.hashSync("745869", 10)
  },
  {
    id: 3,
    nome: "duda alves",
    email: "dudalves762@gmail.com",
    senha: bcrypt.hashSync("86533822", 10)
  },
  {
    id: 4,
    nome: "natflix",
    email: "natflix762@gmail.com",
    senha: bcrypt.hashSync("86533823", 10)
  },
  {
    id: 5,
    nome: "luiz algusto",
    email: "luiz762@gmail.com",
    senha: bcrypt.hashSync("86533824", 10)
  }, 
  {
    id: 6,
    nome: "Gus da gameplay advanced",
    email: "gustavo762@gmail.com",
    senha: bcrypt.hashSync("86533825", 10)
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
