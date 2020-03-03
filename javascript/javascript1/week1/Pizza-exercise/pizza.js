console.log("I love Pizza");

var favPizza = "Hawaii";
var pricePizza = 70;

var newOrder = ('I would like to have' + " " + favPizza + " " + 'pizza' + " " + 'that costs' + " " + pricePizza + "Kr");

console.log(newOrder);

var numOfPizzas = 4;
var familySize = false;

if (familySize) { 
    totalPrice = pricePizza * numOfPizzas * 2;
}
else { 
    totalPrice = pricePizza * numOfPizzas;
}

console.log('New Pizza Order:' + numOfPizzas + " " + favPizza + " " + 'Pizzas' + " " +
'size:' + " " + " " + 'Family Size' + " " + 'Price' + " " + totalPrice)