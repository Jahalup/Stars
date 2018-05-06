// Require express
var express = require("express");
var router = express.Router();


// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Route for the index page
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// Route for posting new data
  router.post("/api/burgers", function(req, res) {
    console.log("req"+req.body.burger_name+req.body.devoured);
    burger.add(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      // Send back the ID of the new entry
      res.json({ id: result.insertId });
      console.log("burger added");
    });
  });


  // Route for updating
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body);
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        else {
        res.status(200).end();
      }
  
      });
  });
  
// Route for deleting
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    burger.del(
     condition,
     function(result) {
       if (result.affectedRows === 0) {
         return res.status(404).end();
       }
       else {
       res.status(202).end();
      }
     });
  });



// Export routes for server.js.
module.exports = router;
