function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// intermediate method inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, "red");
const q = new Square(4, "blue");
