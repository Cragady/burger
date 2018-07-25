var orm = require("../config/orm.js");
var burger = {
    sAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }
}
module.exports = burger;