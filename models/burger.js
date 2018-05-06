// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {

  // Calls orm.all for retrieving all data
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
// calls orm.add for adding new ebtry
    add: function(cols, vals, cb) {
        orm.add("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
// calls orm.update for updating devoured status
    update: function(objColVals, condition, cb) {
            orm.update("burgers", objColVals, condition, function(res) { 
                cb(res);
      });
    },
// calls orm.del to delete an entry
    del: function(condition, cb) {
      orm.del("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
    

module.exports = burger;