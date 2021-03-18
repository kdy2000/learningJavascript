let getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};
let getDistance = function (event, target) {
  let diffX = target.x - event.pageX;
  let diffY = target.y - event.pageY;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
let getDistanceHint = function (distance) {
  if (distance < 10) return "바로 앞입니다!";
  if (distance < 20) return "정말 가까워요";
  if (distance < 40) return "가까워요";
  if (distance < 80) return "멀지는 않아요";
  if (distance < 160) return "멀어요";
  if (distance < 320) return "꽤 멀어요";
  return "택도 없어요";
};

let width = $("#map").width();
let height = $("#map").height();

let target = {
  x: $("#map").offset().left + getRandomNumber(width),
  y: $("#map").offset().top + getRandomNumber(height),
};

let clickLimit = 20;
let clicks = 0;
$("#map").click(function (event) {
  clicks++;
  let distance = getDistance(event, target);

  if (distance < 8) {
    alert(clicks + "번 만에 보물을 찾았습니다.");
    return;
  }
  if (clickLimit == clicks) {
    $("body").append("<h1 id='over'>Game Over!</h1>");
    $("#over").offset({
      left: $("#map").offset().left + width / 3,
      top: $("#map").offset().top + height / 2,
    });
  }

  let distanceHint = getDistanceHint(distance);
  $("#distanceHint").text(distanceHint);
});
