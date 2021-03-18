$("body").append("<h3>catch me!</h3>");
let obj = $("h3");

let bound = 200;

let leftOffset = 0;
let topOffset = 0;

let deltaLeft = [0, 1, 0, -1];
let deltaTop = [1, 0, -1, 0];

let direction = 0;
let cumulate = 0;

let move = function () {
  if (cumulate === bound) {
    leftOffset -= deltaLeft[direction];
    topOffset -= deltaTop[direction];
    direction = (direction + 1) % 4;
    leftOffset += deltaLeft[direction];
    topOffset += deltaTop[direction];
    cumulate = 0;
  }

  obj.offset({
    left: leftOffset,
    top: topOffset,
  });
  cumulate++;

  leftOffset += deltaLeft[direction];
  topOffset += deltaTop[direction];
};

let interval = 15;
let catchCount = 0;
let id = setInterval(move, interval);
$("body").append("<span>count: " + catchCount + "</span>");
$("span").offset({
  left: bound / 2,
  top: bound / 2,
});

obj.click(() => {
  catchCount++;
  interval -= 2;
  console.log(interval);

  if (interval < 1) {
    $("span").text("oh my!");
  } else if (interval < 5) {
    $("span").text("please stop");
  } else {
    $("span").text("count: " + catchCount);
  }

  clearInterval(id);
  id = setInterval(move, interval);
});
