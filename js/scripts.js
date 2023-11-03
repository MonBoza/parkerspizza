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
    console.log(currentPrice);
}








//tests
// let testPizza = new Pizza(["pepperoni", "mushrooms"], "large");
// testPizza.addPrice()