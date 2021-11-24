var express = require('express');
var router = express.Router();
const suitesController = require("../controllers/suitesController");



router.get('/', suitesController.index);



module.exports = router;