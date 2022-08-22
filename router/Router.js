const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/home', Controller.home);

router.get('/login',Controller.mostralogin);

router.get('/cadastro', Controller.mostracadastro);

router.get('/listagem',Controller.listagemp);

module.exports = router;