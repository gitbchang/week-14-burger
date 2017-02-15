var orm = require("../config/orm.js");

var burger = {
    all:function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(val, cb){
        orm.create(val, function(res){
            cb(res);
        });
    },
    update: function(val, cb){
        orm.update(val, function(res){
            cb(res);
        });
    }
}

module.exports = burger;