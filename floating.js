class Ball {
  constructor() {
    let ballHtml = "<p>O</p>";
    this.ballElement = $(ballHtml);
    $("body").append(this.ballElement);

    this.leftBound = 0;
    this.rightBound = document.documentElement.clientWidth - 30;
    this.topBound = 0;
    this.bottomBound = document.documentElement.clientHeight - 30;

    this.leftOffset =
      Math.random() * (this.rightBound - (this.leftBound + 1)) +
      (this.leftBound + 1);
    this.topOffset =
      Math.random() * (this.bottomBound - (this.topBound + 1)) +
      (this.topBound + 1);

    this.leftDelta = Math.random(1);
    this.topDelta = Math.sqrt(1 - this.leftDelta * this.leftDelta);
  }

  move() {
    if (this.leftOffset <= this.leftBound) {
      this.leftDelta *= -1;
    }
    if (this.leftOffset >= this.rightBound) {
      this.leftDelta *= -1;
    }
    if (this.topOffset <= this.topBound) {
      this.topDelta *= -1;
    }
    if (this.topOffset >= this.bottomBound) {
      this.topDelta *= -1;
    }
    this.ballElement.offset({
      left: this.leftOffset,
      top: this.topOffset,
    });
    this.leftOffset += this.leftDelta;
    this.topOffset += this.topDelta;
  }
}

let ball = [];
for (let i = 0; i < 30; i++) {
  ball[i] = new Ball();
  setInterval(function () {
    ball[i].move();
  }, 8);
}
