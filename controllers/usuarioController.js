const db = require("../database/models");
const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator');

const usuarioController = {
    showCadastro: function(req,res,next){
      res.render('cadastrar_usuario')
    },
    showLogin: function(req, res, next){
      res.render('login_usuario')
    },
    cadastrar: async (req, res) => {

      const senhaCriptografada = bcrypt.hashSync(req.body.senha, 12);

      let listaDeErros = validationResult(req);

      if (listaDeErros.isEmpty()) {

        const { nome, email, senha } = req.body;
        await db.Hospede.create({
          nome: nome,
          email: email,
          senha: senhaCriptografada
        }).then(res.render("reservas"))
          .catch((err) => { throw new Error(err) });
      } else {
        return res.render("cadastrar_usuario", { errors: listaDeErros.errors });
      }
    },

    login: async (req, res) => {

      const { user, senha } = req.body;
      const usuarioLogado = await db.Hospede.findOne({ where: { nome: user } });
      if (usuarioLogado != null) {
        req.session.usuario_logado = true;
        res.send("reservas");
      } else { res.send('O nome de usuário ou a senha não correspondem'); }
    }
       
  };
  
  module.exports = usuarioController;