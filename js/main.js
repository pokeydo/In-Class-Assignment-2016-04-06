$(document).ready( function() {

  $("#meow").click( function() {
    $("#animals").append("<img class='animal' src='images/happy-cat.gif' alt='CAT CAT CAT' />");
  });

  $("#pizza").click( function() {
    $("#animals").append("<img class='animal' src='images/pizza-cat.png' alt='PIZZA PIZZA PIZZA' />");
  });

});
