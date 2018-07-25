var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tabIn, cb){
        var querSt = "SELECT * FROM " + tabIn + ";";
        connection.query(querSt, function(err, res){
            if(err) throw err;
            cb(res);
        });
    }
}

// function insertOne();
// function updateOne();

module.exports = orm;