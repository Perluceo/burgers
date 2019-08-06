
$(function(){

    $("#burgerSubmit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        console.log("i got clicked");
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerinput").val().trim(),
            devoured: 0
        };

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour").on("click", function(event) {

        console.log(" devour clicked")
        var id = $(this).data("planid");
        var newDevoured = $(this).data("planid");
    
        var newDevouredState = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed sleep to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


})
