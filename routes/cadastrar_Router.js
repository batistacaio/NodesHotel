var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
const multer = require('multer');
const uploadObject = multer({dest: 'destino'});



router.get('/', usuarioController.showCadastro);

router.post('/', uploadObject.single('foto'), function(req, res, next){
    const file = req.file;

    if(file == null){
        const error = new Error("Arquivo da foto de perfil não foi carregado");
        error.httpStatusCode = 400;
        return next(error);

    }
    res.redirect('/cadastrar')
})


module.exports = router;