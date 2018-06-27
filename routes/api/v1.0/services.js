var express = require('express');
var router = express.Router();

var Test = require("../../../database/collections/test");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ApirestServices' });
});

module.exports = router;