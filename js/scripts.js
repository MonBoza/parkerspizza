function PizzaOrder() {
    this.orders = {};
}
PizzaOrder.prototype.addOrder = function(order) {
}
//Business logic for Pizza();
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.currentOrder = 0;
}

Pizza.prototype.addPrice = function () {
    let currentPrice = 0;
    for (let i = 0; i < this.toppings.length; i += 1) {
            currentPrice += 2;
    } if (this.size === "large") {
            currentPrice += 15;
        } else if (this.size === "medium"){
            currentPrice += 12;
        } else if (this.size === "small"){
            currentPrice += 8;
        } 
        this.currentOrder = currentPrice;
        return this.currentOrder ;
}



// UI Logic
function listPizzaorder(pizzaOrderToDisplay) {
    let pizzaDiv = document.querySelector("div#pizza-selection")
    pizzaDiv.innerText + null;
}   const ul = document.createElement("ul");
    Object.keys(pizzaOrderToDisplay.)
function handlePizzaOrder(event) {
    event.preventDefault();
    const sizeSelected = document.querySelector("select[name='pizza-size']").value;
    const toppingsSelected = document.querySelectorAll("input[name='topping']:checked");
    let toppingsArray = Array.from(toppingsSelected).map(topping => topping.value);
    let newOrder = new Pizza(toppingsArray, sizeSelected);
    const orderTotal = newOrder.addPrice();
    const result = document.getElementById("result");
    result.textContent = "$ " + orderTotal;
}
window.addEventListener("load", function () {
    document.querySelector("form#toppings-form").addEventListener("submit", handlePizzaOrder);
});