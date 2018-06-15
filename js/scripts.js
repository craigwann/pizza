function Pizza(size, toppings, myPrice) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.cost = function() {
  var toppingPrice = this.toppings.lenghth;
  var sizePrice = 10;
  var total = toppingPrice + sizePrice;
  return totalPrice;
};

mine = new Pizza("medium", ["pepperoni", "mushrooms", "olives"] );

console.log(mine.cost());
