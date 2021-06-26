var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard1', { title: 'コロナ情報' });
});

module.exports = router;
