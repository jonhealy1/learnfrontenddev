function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size;
}

const s = new Shape();
const c = new Circle(1, "red");
