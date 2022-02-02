var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
const multer = require('multer');
const uploadObject = multer({dest: 'destino'});
const { check, validationResult, body } = require('express-validator');



router.get('/', usuarioController.showCadastro);

router.post('/',[
    check("nome").notEmpty().withMessage('O campo "nome" é de preenchimento obrigatório'),
    check("sobrenome").notEmpty().withMessage('O campo "sobrenome" é de preenchimento obrigatório'),
    check("email").isEmail().withMessage('Digite um endereço de e-mail válido')


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