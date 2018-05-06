// DOM is fully loaded.
$(function() {
    $(".devburg").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
      
      var newDevourState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("devour state changed");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

// delete button on click
    $(".delburg").on("click", function(event) {
      var id = $(this).data("id");
      console.log("delete" + id);

      // Send the delete request

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
         
          location.reload();
        }
      );
    });
    
  // Create new star on click event
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: false
       
      };
  console.log("Newburger"+newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  