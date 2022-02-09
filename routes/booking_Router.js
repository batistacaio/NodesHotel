var express = require('express');
var router = express.router;
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.reservar);




module.exports = router;