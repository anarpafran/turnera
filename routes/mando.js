var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mando', { title: 'Turnos, Facil y Rapido' });
});

module.exports = router;
