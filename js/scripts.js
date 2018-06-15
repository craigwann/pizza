function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
};

Pizza.prototype.cost = function () {
  cost = parseInt(this.toppings.lenghth + 10);
  return cost;
};
