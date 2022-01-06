var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
const multer = require('multer');
const uploadObject = multer({dest: 'destino'});



router.get('/', usuarioController.showCadastro);

router.post('/', usuarioController.cadastrar);


module.exports = router;