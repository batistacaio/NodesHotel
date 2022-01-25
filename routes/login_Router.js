var express = require('express');
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");



router.get('/', usuarioController.showLogin);
router.post('/', usuarioController.login);




module.exports = router;