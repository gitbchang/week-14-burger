var express = require("express");
var router = express.Router();

//import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var burgerObject = {
            burgs: data
        };

        res.render("index", burgerObject);
    });    
});


module.exports = router;