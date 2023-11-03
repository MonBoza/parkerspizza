# Parker's Pizza Place

#### By Monica Barboza

#### It takes users pizza selections and calculates the total.

## Technologies Used

* HTML
* JavaScript
* CSS

## Description
I named the app Parker's pizza after my stepson who is an honorary ninja Turtle.
This Application will allow user to select the size of pizza they would like to order and add toppings. It will then calculate the price of selected items and present the total. 
* If the user selects a Large pizza with peppers and onions the result total should return 
* your total order total is $19

 * Try it out at http://monboza.github.io/parkerspizza/

## Setup/Installation Requirements

* Open terminal or command prompt.
* Clone the repository by running the following command to your desktop: 
  git clone https://github.com/MonBoza/parkerspizza.git
* Open the project in your favorite code editor. 
* Navigate to the to the bottom of the directory.
* Open the index.html file.

## Known Bugs

*** Having issues getting the DOM to recognize large pizza price.
**

## License

Copyright 2023 MONICA BARBOZA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Email: (mailto:MonBoza@gmail.com)
Copyright (c) November 3, 2023  Monica Barboza






Describe: Pizza()

Test:"It should create properties for toppings and size"
Code:const testPizza = new Pizza(["mushroom","peperoni"], "large");
Expected Output:Pizza(toppings:["mushroom", "peperoni"], "large");

Describe: Pizza.addPrice();

Test:"It should give add price to currentOrder by size "large""
Code:testPizza = new Pizza(["mushroom","peperoni"], "large");
testPizza.addPrice();
Expected Output: 15

Test:"It should add base price for "small" and medium"
Code:let testPizza2 = new Pizza(["pepperoni", "mushrooms"], "small");
testPizza2.addPrice()
Expected Output: 8

Test: "It will calculate price of selected toppings and add toppings to currentOrder"
Code: let testPizza2 = new Pizza(["pepperoni", "mushrooms"], "small");
testPizza2.currentOrder();
Expected Output: 12

