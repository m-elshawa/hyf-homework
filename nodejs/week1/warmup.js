console.log("inside warmup file");

// const circle = new Circle(10);
// circle.getDiameter(); // 20

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumfrance() {
    return Math.PI * this.radius * 2;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.getDiameter());
console.log(myCircle.getCircumfrance());
console.log(myCircle.getArea());

