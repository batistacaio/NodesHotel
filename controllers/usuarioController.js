const usuarios = [];
const bcrypt = require('bcryptjs')

const usuarioController = {
    showCadastro: function(req,res,next){
      res.render('cadastrar_usuario')
    },
    showLogin: function(req, res, next){
      res.render('login_usuario')
    },
    cadastrar: function(req, res, next){
      const { nome, sobrenome } = req.body;
      usuarios.push(
        {
        nome: nome,
        sobrenome: sobrenome,

        });
        res.send("usuario cadastrado com sucesso")
        console.log(usuarios)
    }
  }
  
  module.exports = usuarioController;