var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('filtertest', { title: 'フィルターテスト(埋め込み)' });
});

module.exports = router;
