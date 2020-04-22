console.log("cars example");

const cars = [
  {
    make: "Volvo",
    speed: 45,
    color: "lightYellow"
  },
  {
    make: "BMW",
    speed: 87,
    color: "lightBlue"
  },
  {
    make: "Fiat",
    speed: 78,
    color: "lightCyan"
  }
];

const carColor = cars.map(function(car) {
  return car.color;
});

console.log(carColor);

const carSpeed = cars.map(function(speedo) {
  return speedo.speed;
});

console.log(carSpeed);

console.log("-----filter example");

const fastCars = cars.filter(function(faster) {
  if (faster.speed > 60) {
    return true;
  } else if (faster.speed <= 60) {
    return false;
  }
});

console.log(fastCars);

console.log("-----Sort example");
