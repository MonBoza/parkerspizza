//Business logic for Pizza();
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.currentOrder = 0;
}

Pizza.prototype.addPrice = function() {
    let currentPrice = 0;
    if (this.size === "large") {
    currentPrice += 15;
    } 
    return currentPrice;
}









//tests
// let testPizza = new Pizza(["pepperoni", "mushrooms"], "large");
// let testPizza2 = new Pizza(["pepperoni", "mushrooms"], "small");
// testPizza.addPrice()