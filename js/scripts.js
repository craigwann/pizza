//business END
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

var mine = new Pizza("Medium", ["Pepperoni", "Mushrooms", "Olives"])

function sizePrice(size) {
  if (size ==="Large") {
    return 15;
  } else if (size ==="Medium") {
    return 10
  } else {
    return 5
  }
};

Pizza.prototype.pizzaTotal = function() {
  var toppingPrice = this.toppings.length * 2;
  var sizeCost = sizePrice(this.size);
  var totalCost = toppingPrice + sizeCost;
  return totalCost;
};

//front END
$(document).ready(function(){
  $("form#OrderForm").submit(function(event){
    event.preventDefault();


    if ($("input[type='checkbox']:checked").length === 0) {
      alert("You must select at least one topping");
      window.location.reload(false);
    }

    $("#result").show();
    var toppingArray = [];
    var sizeInput = $("input:radio[name=pizzaSize]:checked").val();
    $('#result').append('<h3>' + sizeInput + '</h3>' + "<br>");

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var toppingInput = $(this).val();
      toppingArray.push(toppingInput);
      $('#result').append(toppingInput + "<br>");
    });

    var order = new Pizza(sizeInput, toppingArray);

    var total = order.pizzaTotal();


    $('#result').append('<h3>Your Total: $' + total + '</h3>' + "<br>");

    $('#OrderForm').hide();
  });
  $("#anotherPizza").click(function() {
    window.location.reload(false);
  });
});
