// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    add: function(cols, vals, cb) {
        orm.add("burgers", cols, vals, function(res) {
          cb(res);
        });
      },

    update: function(objColVals, condition, cb) {
            orm.update("burgers", objColVals, condition, function(res) { 
                cb(res);
      });
    }
  };
    

module.exports = burger;