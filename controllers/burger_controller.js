var express = require('express'),
    burger = require('../models/burger.js'),
    router = express.Router();

router.get("/", function(req, res){
    burger.sAll(function(data){
        var handObj = {
            burgers: data
        };
        res.render('index', handObj);
    });
});

module.exports = router;