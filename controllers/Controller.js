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
}




module.exports = Controller;