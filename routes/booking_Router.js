var express = require('express');
const { check, validationResult, body } = require('express-validator');
var router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.showResumo);

router.post('/',bookingController.reservar);




module.exports = router;