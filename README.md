Describe: Pizza()

Test:"It should create properties for toppings and size"
Code:const testPizza = new Pizza(["mushroom","peperoni"], "large");
Expected Output:Pizza(toppings:["mushroom", "peperoni"], "large");

Describe: Pizza.addPrice();

Test:"It should give add price to currentOrder by size "large""
Code:testPizza.addPrice();
Expected Output: 15

Test:"It should add base price for "small" and medium"
Code:let testPizza2 = new Pizza(["pepperoni", "mushrooms"], "small");
testPizza2.addPrice()
Expected Output: 8

Test: "It will calculate price of selected toppings and add toppings to currentOrder"
Code: testPizza2.currentOrder();
Expected Output: 12

