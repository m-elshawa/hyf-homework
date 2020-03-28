console.log("Median & Average");

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function calculate2(bananas) {
    var sum = 0;
    var arrLength = bananas.length;
    for (var i = 0; i < arrLength; i++) {
      sum = sum + bananas[i];
    }
    return sum / arrLength;
  }
  average = calculate2(housePrices)
  console.log(average);


const sortedHouseprices = housePrices.sort();
console.log(sortedHouseprices);

const midElement = Math.ceil(sortedHouseprices.length / 2);
console.log(midElement);

const median =
sortedHouseprices.length % 2 == 0 ? (sortedHouseprices[midElement] + arrSort[midElement - 1]) / 2 : sortedHouseprices[midElement - 1];

console.log("median: ", median);

var para = document.createElement("p");
para.innerText = "The average of House prices array is " + average + "," + " And the median of house prices array is " + median;

document.body.appendChild(para);
