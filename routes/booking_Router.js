var express = require('express');
const { check, validationResult, body } = require('express-validator');
var router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/',[ 
check('entrada').notEmpty(),
check('saida').notEmpty,
check(' suites').notEmpty,
check('hospede1').notEmpty],
bookingController.reservar);




module.exports = router;