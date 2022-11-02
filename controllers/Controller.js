const {sequelize} = require('../database/models');

const Controller = {
    home:  async (req,res) => {
        let sql = `SELECT * FROM produtos`;
        let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        return res.render('home.ejs',{produtos});
    },
    mostralogin: (req, res) => {
        res.render('login.ejs')
    },
    mostracadastro: (req, res) => {
        res.render('cadastro.ejs')
    },
    listagemp: (req, res) => {
        res.render('listagemP.ejs')
    },
    mostracarrinho: async (req,res) => {
        let sql = `SELECT * FROM produtos`;
        let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        let lista = [];
        return res.render('carrinho.ejs',{produtos, lista});
    },
    addAoCarrinho: async (req, res) => {
        let {id} = req.body;
        res.redirect("/carrinho")
    },
    finalizacompra: (req, res) => {
        res.render('finalizaCompra.ejs')
    },
    painelusuario: (req, res) => {
        res.render('painelUsuario.ejs')
    },
    produtointerno: (req, res) => {
        res.render('produtoInterno.ejs')
    }
}


module.exports = Controller;