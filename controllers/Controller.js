const Controller = {
    home: (req, res) => {
        res.render('home.ejs')
    },

    
        mostralogin: (req, res) => {
        res.render('login.ejs', { erro: 0 });
    },
        mostracadastro:(req,res) =>{
            res.render('cadastro.ejs')
        }
}
  
    


module.exports = Controller;