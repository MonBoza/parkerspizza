//Business logic for Pizza();
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.currentOrder = 0;
}

Pizza.prototype.addPrice = function() {
    let currentPrice = 0;
    let toppingTotal = 0;
    for (let i = 0; i < this.toppings.length; i += 1) {
        toppingTotal += 2;
    } if (this.size === "large") {
        this.currentOrder = currentPrice += 15;
        } else if (this.size === "medium"){
        this.currentOrder = currentPrice += 12;
        } else if (this.size === "small"){
            this.currentOrder = currentPrice += 8;
        } 
        return this.currentOrder;
}

Pizza.prototype.calculateToppings = function() {
    let toppingTotal = 0;
    for (let i = 0; i < this.toppings.length; i += 1) {
        toppingTotal += 2;
    }
    return toppingTotal;
}










//tests
// let testPizza = new Pizza(["pepperoni", "mushrooms"], "large");
// let testPizza2 = new Pizza(["pepperoni", "mushrooms"], "small");
// testPizza.addPrice()