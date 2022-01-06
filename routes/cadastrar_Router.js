var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
const multer = require('multer');
const uploadObject = multer({dest: 'destino'});



router.get('/', usuarioController.showCadastro);

router.post('/', usuarioController.cadastrar);

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