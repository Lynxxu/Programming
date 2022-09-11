class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(this.sideLength ** 2);
  }
}

const some = new Square(5);
