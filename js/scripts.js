//Business logic for Pizza();
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.currentOrder = 0;
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
    const sizeSelected = document.querySelector("select[name='pizza-size']").value;
    const toppingsSelected = document.querySelectorAll("input[name='topping'] :checked");
    let toppingsArray = Array.from(toppingsSelected).map(topping => topping.value);
    let newOrder = new Pizza(sizeSelected, toppingsArray);
    Pizza.addPrice(newOrder);

    const orderTotal = document.getElementById("p");
    orderTotal.textContent = " $" + newOrder.currentOrder;
    document.getElementById("order").append(orderTotal);
    
}
window.addEventListener("load", function (){
    document.querySelector("form#toppings-form").addEventListener("submit", handlePizzaOrder);
});