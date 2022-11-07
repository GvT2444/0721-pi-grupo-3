<<<<<<< HEAD
const { sequelize } = require('../database/models');
const bcrypt = require('bcrypt')

=======
const {cliente ,sequelize } = require('../database/models');
const bcrypt = require('bcrypt');
>>>>>>> 8daeef1aaded46992acde6076058916de4377c25
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

        let cli = clientes.find(
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
    mostracadastro:(req, res) => {

        res.render('cadastro.ejs');
        
    },
<<<<<<< HEAD

=======
    gravaCadastro: async (req,res) => {
        let sql = `SELECT * FROM clientes`;
        let cliente = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});

        const {nome, email, senha, confirmacao} = req.body;

        if (senha !== confirmacao) {
            res.render('error.ejs', {msg: "Senha e confirmação não conferem."})
            return;
        }

        const clientes = await clientes.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )

        req.session.usuario = clientes;

        res.redirect('/home');
    
    },
>>>>>>> 8daeef1aaded46992acde6076058916de4377c25
    addCadastro: async (req,res) => {
        let {nome, email, senha} = req.body;

<<<<<<< HEAD
        const cli = await Clientes.create(
=======


        const c = await clientes.create(
>>>>>>> 8daeef1aaded46992acde6076058916de4377c25
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)}
        )

<<<<<<< HEAD
        req.session.cliente = cli;
=======
        req.session.cliente = c;
>>>>>>> 8daeef1aaded46992acde6076058916de4377c25

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