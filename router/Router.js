const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/home', Controller.home);

router.get('/login', Controller.mostralogin);
router.post('/login', Controller.login);

router.get('/cadastro', Controller.mostraCadastro);
router.post('/cadastro', Controller.addCadastro)

router.get('/listagem', Controller.listagemp);

router.get('/carrinho', Controller.mostracarrinho);
router.post('/carrinho', Controller.addAoCarrinho);
router.delete('/carrinho/:id',Controller.removerItemDoCarrinho)

router.get('/painel', Controller.painelusuario);

router.get('/finaliza', Controller.finalizacompra);

router.get('/produto/:id', Controller.produtointerno);
router.post('/produto',Controller.addProdutoInterno);

module.exports = router;