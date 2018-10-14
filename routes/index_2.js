var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index_2');
    
});

module.exports = router;
