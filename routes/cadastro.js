var express = require('express');
var router = express.Router();
var cadastroController = require("../controllers/cadastroController");



router.get('/', cadastroController.index);



module.exports = router;