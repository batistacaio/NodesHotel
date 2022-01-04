var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");



router.get('/', usuarioController.showCadastro);




module.exports = router;