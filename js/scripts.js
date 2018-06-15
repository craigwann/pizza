//business END
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

function sizePrice(size) {
  if (size ==="Large") {
    return 15;
  } else if (size ==="Medium") {
    return 10
  } else {
    return 5
  }
};

Pizza.prototype.cost = function() {
  var toppingPrice = this.toppings.lenghth * 2;
  var sizeCost = sizePrice(this.size);
  var totalCost = toppingPrice + sizeCost;
  return totalCost;
};

//front END
$(document).ready(function(){
  $("form#OrderForm").submit(function(event){
    event.preventDefault();

    $("#result").show();

    var toppingArray = [];

    var sizeInput = $("input:radio[name=pizzaSize]:checked").val();
    $('#result').append('<h3>' + sizeInput + '</h3>' + "<br>");

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var toppingInput = $(this).val();
      $('#result').append(toppingInput + "<br>");
      toppingArray.push(toppingInput);
    });


    var order = new Pizza(sizeInput, toppingArray);
    var total = order.cost();

    $('#result').append('<h3>' + total + '</h3>' + "<br>");

    $('#OrderForm').hide();
  });
});
