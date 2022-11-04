const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/home', Controller.home);

router.get('/login', Controller.mostralogin);

router.get('/cadastro', Controller.mostraCadastro);
router.post('/cadastro', Controller.gravaCadastro);

router.get('/listagem', Controller.listagemp);

router.get('/carrinho', Controller.mostracarrinho);
router.post('/carrinho', Controller.addAoCarrinho);

router.get('/painel', Controller.painelusuario);

router.get('/finaliza', Controller.finalizacompra);

router.get('/produto', Controller.produtointerno);

module.exports = router;