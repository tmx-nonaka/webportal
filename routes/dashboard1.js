var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard1', { title: '陽性者データ'});
});

module.exports = router;
