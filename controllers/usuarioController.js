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
      const { country, nome, sobrenome, email, cpf, ddd, number, nascimento, endereco, cep, bairro, cidade, uf, user, senha  } = req.body;
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
        user: user,
        senha: bcrypt.hashSync(senha,12)

        });
        res.render('login_usuario')
        console.log(usuarios)
    },
    login: function(req, res, next){

      const { user, senha } = req.body;
      const usuarioLogado = usuarios.find((usuario) => usuario.user == user && bcrypt.compareSync(senha, usuario.senha));
      if(usuarioLogado != null){
        req.session.usuario_logado = true
          res.send("usuario logado");
      }else{ res.send('O nome de usuário ou a senha não correspondem')}
      }
       
  };
  
  module.exports = usuarioController;