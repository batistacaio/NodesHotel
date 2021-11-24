var express = require('express');
var router = express.Router();
var contatoController = require("../controllers/contatoController");



router.get('/', contatoController.index);



module.exports = router;