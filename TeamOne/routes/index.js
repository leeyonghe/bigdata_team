var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var d3 = require('d3');    
    res.render('index', { d3: d3 });
});

module.exports = router;
