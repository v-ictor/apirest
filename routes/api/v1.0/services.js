var express = require('express');
var router = express.Router();

// importando modelo de la base de datos
var Test = require("../../../database/collections/test");
var Contact = require("../../../database/collections/contact");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ApirestServices' });
});

module.exports = router;