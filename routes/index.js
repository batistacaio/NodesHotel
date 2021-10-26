var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodes Hotel' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato');
});
router.get('/suites', function(req, res, next) {
  res.render('suites');
});
router.get('/reservas', function(req, res, next) {
  res.render('reservas');
});

router.get('/login', function(req, res, next) {
  res.render('login');
})

module.exports = router;
