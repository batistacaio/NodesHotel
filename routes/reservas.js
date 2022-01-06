var express = require('express');
var router = express.Router();
var reservasController = require("../controllers/reservasController");



router.get('/',reservasController.index);



module.exports = router;