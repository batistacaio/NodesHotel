var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
const multer = require('multer');
const uploadObject = multer({dest: 'destino'});
const { check, validationResult, body } = require('express-validator');



router.get('/', usuarioController.showCadastro);

router.post('/',[
    check("nome").isLength({min:3}),
    check("sobrenome").notEmpty(),
    check("email").isEmail(),
    check("cpf").notEmpty(),
    check("number").isNumeric(),
    check("nascimento").notEmpty(),
    check("cpf").notEmpty(),
    check("endereco").notEmpty(),
    check("cep").notEmpty(),
    check("bairro").notEmpty(),
    check("cidade").notEmpty(),
    check("uf").notEmpty().isLength({max:2}),
    check("senha").isLength({min:6})

], usuarioController.cadastrar);

router.post('/foto', uploadObject.single('foto'), function(req, res, next){
    const file = req.file;

    if(file == null){
        const error = new Error("Arquivo vazio");
        error.httpStatusCode = 400;
        return next(error);
    }else{
     
     res.redirect('/cadastrar');
     function alerta(){alert("arquivo carregado com sucesso!")}
    }

    });


module.exports = router;