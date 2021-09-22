var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodes Hotel' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato');
});

module.exports = router;
