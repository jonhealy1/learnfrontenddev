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
  Stopwatch.prototype.start = function () {
    if (startTime === null) {
      startTime = Date.now();
    } else {
      console.log("Stopwatch is already running!");
    }
  };
}
