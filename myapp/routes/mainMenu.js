var express = require('express');
var router = express.Router();

/* GET mainMenu page. */
router.get('/', function(req, res, next) {
  res.render('mainMenu', { title: '会計ソフト' });
});

module.exports = router;
