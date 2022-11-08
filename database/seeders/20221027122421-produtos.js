'use strict';

const produtos = [
  {
    id: 1,
    imagem: "degadevinho.jpg",
    nome:"Rack Para Vinho Bamboo Mor",
    preco: 132.99
  },
  {
    id: 2,
    imagem: "mesadobravel.jpg",
    nome:"Jogo De Mesa Dobrável 70x70 C/ 4 Cadeiras Madeira Maciça Bar",
    preco: 385.99
  },
  {
    id: 3,
    imagem: "bancodemadeira.jpg",
    nome: "Banco Madeira 3 Lugares Lyptus Jatobá 45x150cm Marrom Metalnew",
    preco: 3999.99
  },
  {
    id: 4,
    imagem: "buffet.jpg",
    nome:"Buffet Onix Imbuia/Off White Viero",
    preco: 312.22
  },
  {
    id: 5,
    imagem: "balancademadeira.jpg",
    nome:"Banco Balanço de Madeira - Havaí",
    preco: 5850.00
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
