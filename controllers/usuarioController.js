const usuarios = [];
// const bcrypt = require('bcryptjs')

const usuarioController = {
    showCadastro: function(req,res,next){
      res.render('cadastrar_usuario')
    },
    showLogin: function(req, res, next){
      res.render('login_usuario')
    },
    cadastrar: function(req, res, next){
      const { country, nome, sobrenome, email, cpf, ddd, number, nascimento, endereco, cep, bairro, cidade, uf, usuario, senha  } = req.body;
      usuarios.push(
        {
        country: country,
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        cpf: cpf,
        ddd: ddd,
        telefone: number,
        data_de_nascimento: nascimento,
        endereço: [endereco + ' ,'+ "bairro :" +bairro +" "+ "cep:" + cep +" " + cidade +" "+ uf],
        usuario: usuario,
        senha: senha

        });
        res.send("usuario cadastrado com sucesso")
        console.log(usuarios)
    }
  };
  
  module.exports = usuarioController;