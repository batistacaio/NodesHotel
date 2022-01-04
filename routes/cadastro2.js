var express = require('express');
var router = express.Router();
var cadastro2Controller = require("../controllers/cadastro2Controller");



router.get('/', cadastro2Controller.index);



module.exports = router;