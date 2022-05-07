const barsInit = W / 1.45;
const barsSize = W * 0.3;
const barsHeight = H / 75;
const fontSizeLarge = barsSize * 0.05;
const fontSizeSmall = barsSize * 0.04;

function showPanel() {
  shipInfo();
  score();
  ships();
}

function shipInfo() {
  textSize(fontSizeSmall);
  fill(240);
  stroke(20);
  strokeWeight(2);
  var posX = barsInit - barsSize / 7;
  text("shield", posX, H * 0.02 + barsSize / 40);
  text("energy", posX, H * 0.05 + barsSize / 40);
  text("course", posX, H * 0.08 + barsSize / 40);

  fill(12);
  strokeWeight(1);
  stroke(50);
  rect(barsInit, H * 0.02, barsSize, barsHeight, 2);
  rect(barsInit, H * 0.05, barsSize, barsHeight, 2);
  rect(barsInit, H * 0.08, barsSize, barsHeight, 2);

  strokeWeight(0);
  
  if (ship.shield > 20) 
    fill("blue");

      else
        fill("red");

  rect(barsInit, H * 0.02, (ship.shield * barsSize) / 100, barsHeight, 2);

  if (ship.energy > 20) {
    fill("green");
  } else {
    fill("orange");
  }
  rect(barsInit, H * 0.05, (ship.energy * barsSize) / 100, barsHeight, 2);

  fill(240);
  rect(barsInit, H * 0.08, (courseProgress * barsSize) / totalCourse, barsHeight, 2);
}

function score() {
  textSize(fontSizeLarge);
  fill(240);
  strokeWeight(2);
  stroke(20);
  text(
    "STAGE" + " " + stage + "   " + "SCORE" + " " + int(ship.score),
    W * 0.82,
    H * 0.14
  );
}

function ships() {
  textSize(fontSizeLarge);
  fill(240);
  strokeWeight(2);
  stroke(20);
  text(
    "SHIPS" + " " + ship.ships,
    W * 0.93,
    H * 0.98
  );
}
