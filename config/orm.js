var connection = require("../config/connection.js");

function qMarkers(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push("?");
    };
    return arr.toString();
};

function sqlEyesObj(ob){
    var value = ob[key];
    if(Object.hasOwnProperty.call(ob, key)){
        if(typeof value === "string" && value.indexOf(" ") >= 0){
            value = "'" + value + "'";
        };
        arr.push(key + "=" + value);
    };
    return arr.toString();
};

var orm = {
    all: function(tabIn, cb){
        var querSt = "SELECT * FROM " + tabIn + ";";
        connection.query(querSt, function(err, res){
            if(err) throw err;
            cb(res);
        });
    },
    create: function(table, cols, vals, cb){
        var querSt = "INSERT INTO" + table;
        querSt += " (";
        querSt += cols.toString();
        querSt += ") ";
        querSt += "VALUES (";
        querSt += qMarkers(vals.length);
        querSt += ") ";
        connection.query(querSt, vals, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    update: function(table, objColVals, condition, cb){
        var querSt = "UPDATE " + table;
        querSt += " SET ";
        querSt += sqlEyesObj(objColVals);
        querSt += " WHERE ";
        querSt += condition;
        connection.query(querSt, function(err, res){
            if(err) throw err;
            cb(res);
        });
    },
    delete: function(table, condition, cb){
        var querSt = "DELETE FROM " + table;
        querSt += " WHERE ";
        querSt += condition;
        connection.query(querSt, function(err, res){
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;