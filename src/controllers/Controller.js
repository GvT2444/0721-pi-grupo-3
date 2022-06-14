const Controller = {
    listar: (req, res) => {
        res.render('../src/views/home.ejs')
    },

    
        mostralogin: (req, res) => {
        res.render('../src/views/login.ejs', { erro: 0 });
    }
}
  
    


module.exports = Controller;