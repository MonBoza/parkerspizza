//Business logic for Pizza();
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.currentOrder = 0;
    addPrice();
}

Pizza.prototype.addPrice = function() {
    let currentPrice = 0;
    for (let i = 1; i < this.toppings.length; i += 1) {
        this.currentOrder = currentPrice += 2;
    } if (this.size === "large") {
        this.currentOrder = currentPrice += 15;
        } else if (this.size === "medium"){
        this.currentOrder = currentPrice += 12;
        } else if (this.size === "small"){
            this.currentOrder = currentPrice += 8;
        } 
        return this.currentOrder ;
}



// UI Logic
function handlePizzaOrder(event) {
    event.preventDefault();
    const sizeSelected = document.querySelector("form#size-form").value;
    const toppingsSelected = document.querySelectAll("input[name='toppings']: checked").value;
    let toppingsArray = Array.from(toppingsSelected).map(topping => topping.value);
    let newOrder = new Pizza(sizeSelected, toppingsSelected);
    Pizza.addPrice(newOrder);

    const orderTotal = document.createElement("p");
    orderTotal.textContent = " $" + newOrder.currentOrder;
    document.getElementById("order").append(orderTotal);
}
window.addEventListener("load", function() {
    document.querySelector("form#pizza").addEventListener("submit", handlePizzaOrder); 
});


