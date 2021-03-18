class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    let carHtml = "<img src='http://nostarch.com/images/car.png'>";
    this.carElement = $(carHtml);

    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
    });

    $("body").append(this.carElement);
  }
  moveLeft() {
    this.x -= 5;
    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
    });
  }
  moveRight() {
    this.x += 5;
    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
    });
  }
  moveUp() {
    this.y -= 5;
    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
    });
  }
  moveDown() {
    this.y += 5;
    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
    });
  }
}

let kia = new Car(0, 0);
let nissan = new Car(400, 100);
kia.draw();
nissan.draw();
setInterval(function () {
  kia.moveRight();
}, 70);
setInterval(function () {
  nissan.moveDown();
}, 100);
