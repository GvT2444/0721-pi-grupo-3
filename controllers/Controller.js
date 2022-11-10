const { sequelize } = require('../database/models');
const bcrypt = require('bcrypt')

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

        res.render('login.ejs', {clientes});
        
    },
    mostraCadastro:(req, res) => {
        res.render('cadastro.ejs', {cli:req.session.cliente});
        
    },
    addCadastro: async (req,res) => {
        let {nome, email, senha} = req.body;

        const cli = await Clientes.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)}
        )

        req.session.cliente = cli;

        res.redirect("/home");

    },
    listagemp: (req, res) => {
        res.render('listagemP.ejs')
    },
    mostracarrinho: async (req, res) => {
        let produtos = req.session.carrinho? req.session.carrinho:[]
        return res.render('carrinho.ejs', { produtos});
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
    showCarrinho: async (req, res)=>{
        let produtos = req.session.carrinho;
        let total = 0;
        for (const p of produtos) {
            total = total + (p.preco * p.preco);
        }
        return res.render('carrinho.ejs',{produto:req.session.carrinho, total});
    },
    removerItemDoCarrinho: async(req, res) => {
        let id = req.params.id
        req.session.carrinho = req.session.carrinho.filter(p => id != p.id)

        return res.json({id}).status(200)
        
    },

    finalizacompra: (req, res) => {
        res.render('finalizaCompra.ejs')
    },
    painelusuario: (req, res) => {
        res.render('painelUsuario.ejs')
    },
    produtointerno: async (req, res) => {  
        res.render('produtoInterno.ejs');
    }
}

module.exports = Controller;