const db = require("../database/models");
const { Op } = require("sequelize");
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

        const { nome, email, senha, cpf, telefone, endereco, cep, cidade, uf } = req.body;
        await db.Hospede.create({
          nome: nome,
          email: email,
          senha: senhaCriptografada,
          cpf: cpf,
          telefone: telefone,
          endereco: endereco,
          cep: cep,
          cidade: cidade,
          uf: uf
        }).then(res.render("reservas"))
          .catch((err) => { throw new Error(err) });
      } else {
        return res.render("cadastrar_usuario", { errors: listaDeErros.errors });
      }
    },

    login: async (req, res) => {
      const { email, senha } = req.body;
      const usuario = await db.Hospede.findOne({ where: { email: email } });
      if (usuario) {
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);
        if (senhaCorreta) {
          req.session.usuario = usuario;
          res.redirect('/reservas');
        } else {
          res.render('login_usuario', {
            erro: 'Senha incorreta'
          });
        }
      } else {
        res.render('login_usuario', {
          erro: 'Usuário não encontrado'
        });
      };
    }
  };
  
  module.exports = usuarioController;