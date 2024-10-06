// // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(10);
// circle.draw();

// Constructor Function
function Stopwatch() {
  let startTime = null;
  let elapsedTime = 0;
  this.stop = function () {
    if (startTime !== null) {
      let passed = Date.now() - startTime;
      elapsedTime += passed;
      startTime = null;
    } else {
      console.log("Stopwatch has not yet started!");
    }
  };
  this.reset = function () {
    elapsedTime = 0;
    startTime = null;
  };
  Object.defineProperty(this, "display", {
    get: function () {
      return elapsedTime;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.startTime === null) {
    this.startTime = Date.now();
  } else {
    console.log("Stopwatch is already running!");
  }
};
