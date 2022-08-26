const Controller = {
    home: (req, res) => {
        res.render('home.ejs')
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
    mostracarrinho: (req, res) => {
        res.render('carrinho.ejs')
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