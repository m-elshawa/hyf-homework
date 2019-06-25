console.log('housey-pricey');

let widthInMetersPeter = 8;
let depthInMetersPeter = 10;
let hightInMetersPeter = 10;
let gardenSizeInM2Peter = 100;


let volumeInMetersPeter = widthInMetersPeter * depthInMetersPeter * hightInMetersPeter

let housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

console.log("Peter paid " + housePricePeter + " for the house");

if (housePricePeter > 2500000) {console.log("Peter paid too much")}

else {console.log("The price is good")}

var widthInMetersJulia = 5;
var depthInMetersJulia = 11;
var hightInMetersJulia = 8;
var gardenSizeInM2Julia = 70;

let volumeInMetersJulia = widthInMetersJulia * depthInMetersJulia * hightInMetersJulia
let housePriceJulia = volumeInMetersJulia * 2.5 * 100 + gardenSizeInM2Julia * 300;

console.log("Julia paid " + housePriceJulia + " for the house")

if (housePriceJulia > 1000000) {console.log("Julia paid too much)")}
else {console.log("The prices of Julia's house is good")}
