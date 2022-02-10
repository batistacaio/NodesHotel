const usuarios = [];
const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator');

const usuarioController = {
    showCadastro: function(req,res,next){
      res.render('cadastrar_usuario')
    },
    showLogin: function(req, res, next){
      res.render('login_usuario')
    },
    cadastrar: function(req, res, next){
      let listaDeErros = validationResult(req);

      if(listaDeErros.isEmpty()){

        const { nome, email, senha  } = req.body;
        usuarios.push(
          {

          nome: nome,
          email: email,
          senha: bcrypt.hashSync(senha,12)
  
          });
          res.render('reservas')
          console.log(usuarios)
      }else {
        return res.render("cadastrar_usuario", {errors: listaDeErros.errors})
      }
    },
    login: function(req, res, next){

      const { email, senha } = req.body;
      const usuarioLogado = usuarios.find((usuario) => usuario.email == email && bcrypt.compareSync(senha, usuario.senha));
      if(usuarioLogado != null){
        req.session.usuario_logado = true
          res.send("usuario logado");
      }else{ res.send('O nome de usuário ou a senha não correspondem')}
      }
       
  };
  
  module.exports = usuarioController;