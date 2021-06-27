var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard2', { title: 'ワクチン関連データ'});
});

module.exports = router;
