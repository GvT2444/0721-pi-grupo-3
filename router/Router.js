const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/home', Controller.home);

router.get('/login',Controller.mostralogin);

router.get('cadastro', Controller.mostracadastro);

module.exports = router;