const { sequelize } = require('../database/models');

const Controller = {
    home: async (req, res) => {
        let sql = `SELECT * FROM produtos`;
        let produtos = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        return res.render('home.ejs', { produtos });
    },
    mostralogin: async (req, res) => {
        let sql = `SELECT * FROM clientes`;
        let clientes = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

        let emailDigitado = req.body.email;
        let senhaDigitada = req.body.senha;

        let cliente = clientes.find(
            c => {
                if (emailDigitado == c.email && senhaDigitada == c.senha) {
                    return true;
                } else {
                    return false;
                }
            }
        );
        req.session.cliente = cliente

        res.render('login.ejs', {clientes});
        
    },
    mostracadastro: (req, res) => {
        res.render('cadastro.ejs')
    },

    addCadastro: (req,res) => {
        
    },
    listagemp: (req, res) => {
        res.render('listagemP.ejs')
    },
    mostracarrinho: async (req, res) => {
        let sql = `SELECT * FROM produtos`;
        let produtos = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        let produto = req.session.carrinho;
        return res.render('carrinho.ejs', { produto });
    },
    addAoCarrinho: async (req, res) => {
        let { id } = req.body;
        let sql = `SELECT * FROM produtos where id = ${id}`;
        let produtos = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        let produto = produtos[0];
        if (req.session.carrinho) {
            req.session.carrinho.push(produto);
        } else {
            req.session.carrinho = [produto];
        }
        console.log(req.session.carrinho);
        res.redirect("/home");
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