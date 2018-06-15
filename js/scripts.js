//business END
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

mine = new Pizza("medium", ["pepperoni", "mushrooms", "olives"] );

function sizePrice(size) {
  if (size ==="large") {
    return 15;
  } else if (size ==="medium") {
    return 10
  } else {
    return 5
  }
};

Pizza.prototype.cost = function() {
  var toppingPrice = this.toppings.lenghth * 2;
  var sizeCost = sizePrice(this.size);
  var totalPrice = toppingPrice + sizeCost;
  return Number(totalPrice);
};
// console.log(mine.cost());


//front END
$(document).ready(function(){
  $("form#pizza-toppings").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#result').append(pizzaToppings + "<br>");
    });
    // $('#OrderForm').hide();
  });
});
