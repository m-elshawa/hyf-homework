/* DONT MODIFY ANY OF THIS CODE!!!*/

window.getAvailableProducts = function() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomItem(availableProductNames) {
    return availableProductNames[
      getRandomInt(0, availableProductNames.length - 1)
    ];
  }

  function getRandomProductname() {
    const preWords = [
      "Used",
      "Fantastic",
      '"Used"',
      "Broken",
      "Beautiful",
      "Wet",
      "Green",
      "Sloppy",
      "Dirty"
    ];
    const productNames = [
      "Carrot",
      "Drone",
      "Giftcard",
      "Puppy",
      "Car",
      "Shirt",
      "Milk",
      "Chalk",
      "Fish fingers",
      "Socks",
      "Chocolate",
      "Toothbrush",
      "Computer",
      "Nokia",
      "Cologne"
    ];

    let chosenProductName = getRandomItem(productNames);
    const shouldHavePreWord = getRandomInt(0, 10) > 6;

    if (shouldHavePreWord) {
      const preWord = preWords[getRandomInt(0, preWords.length - 1)];
      chosenProductName = `${preWord} ${chosenProductName}`;
    }

    return chosenProductName;
  }

  /* DONT MODIFY ANY OF THIS CODE!!!*/
  function getRandomCountries() {
    const availableCountries = [
      "Denmark",
      "Sweden",
      "Norway",
      "Germany",
      "Iceland",
      "England"
    ];
    const numberOfCountries = getRandomInt(1, 3);

    const randomCountries = [];
    while (randomCountries.length < numberOfCountries) {
      const randomIndex = getRandomInt(0, availableCountries.length - 1);
      const randomCountry = availableCountries[randomIndex];
      if (!randomCountries.includes(randomCountry)) {
        randomCountries.push(randomCountry);
      }
    }

    return randomCountries;
  }

  const numberOfAvailableProducts = getRandomInt(0, 30);
  const availableProducts = Array.apply(
    null,
    Array(numberOfAvailableProducts)
  ).map(() => {
    const name = getRandomProductname();
    return {
      id: `${name}${getRandomInt(0, 100000)}`,
      name,
      price: getRandomInt(0, 10000),
      rating: getRandomInt(1, 10),
      shipsTo: getRandomCountries()
    };
  });

  return availableProducts;
};

window.sendPricesToServer = function(prices, callback) {
  console.log(`Sending these prices: ${prices} to an analytics server`);

  setTimeout(() => {
    callback(`These prices were received ${prices}`);
  }, 3000);
};

//My code starts here

const testProductNames = [
  "iPhone",
  "Samsung",
  "iPad",
  "Tablet",
  "Charger",
  "Cable",
  "Headset",
  "Speakers"
];
const listOfProducts = document.querySelector(".products");
const ulProducts = listOfProducts.querySelector("ul");
console.log(ulProducts);


// for (var i = 0; i < testProductNames.length; i++) {
//   const item = testProductNames[i];
//   const lista = document.createElement("li");
//   const text = document.createTextNode(item);
//   lista.appendChild(text);
//   ulProducts.appendChild(lista);
// }


const products = ["Flat screen", "Mobile phone", "Wallet"];

function renderProducts(products) {
  //for (var k = 0; k < ulProducts.childNodes.length; k++) {
    //ulProducts.removeChild(ulProducts.childNodes[k]);
    
  //}
  ulProducts.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    const ulagain = document.createElement("ul");
    const liName = document.createElement("li");
    const liPrice = document.createElement("li");
    const liRating = document.createElement("li");
    const liDestination = document.createElement("ul");
    const itemsShit = products[i];
    liName.innerHTML = itemsShit.name;
    liPrice.innerHTML = itemsShit.price;
    liRating.innerHTML = itemsShit.rating;
    for (var z = 0; z < itemsShit.shipsTo.length; z++) {
        const ulDestination = document.createElement("li");
        ulDestination.innerHTML = itemsShit.shipsTo[z];
        liDestination.appendChild(ulDestination);
    }
    
    ulagain.appendChild(liName);
    ulagain.appendChild(liPrice);
    ulagain.appendChild(liRating);
    ulagain.appendChild(liDestination);
    const liagain = document.createElement("li");
    liagain.appendChild(ulagain);
    ulProducts.appendChild(liagain);

}

}
let theProducts = getAvailableProducts();
renderProducts(theProducts);


// filter/search products

const searchField = document.getElementById("searchbox");

let currentSearchFieldValue = "";

let currentProductsArr = theProducts;

searchField.addEventListener('keyup', (search) => {
  currentSearchFieldValue = searchField.value.toLowerCase(); 
  currentProductsArr = theProducts.filter(x => x.name.toLowerCase().includes(currentSearchFieldValue));
  console.log(currentProductsArr);
  renderProducts(currentProductsArr);

});

// filter based on max price



