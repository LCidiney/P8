function setup() {
  createCanvas(1000, 1000, WEBGL);
  frameRate(10);
  angleMode(DEGREES);
  sldAngle = createSlider(0, 90, 45, 5);
  sldSize = createSlider(0, 0.75, 0.2, 0.05);
}

function draw() {
  background(21, 43, 60);
  translate(0, height / 2);
  angle = sldAngle.value();
  drawFractal(200);
}

function drawFractal(len) {
  if (len < 10) {
    return;
  }

  createRect(0, 0, 5, len, 20);

  push();
  rotate(angle);
  drawFractal(len * sldSize.value());
  pop();

  push();
  rotate(-angle);
  drawFractal(len * sldSize.value());
  pop();
}

function createRect(pX, pY, width, height, qtd) {
  noStroke();

  for (i = 1; i <= qtd; i++) {
    fill(randomColor(), randomColor(), randomColor());

    rect(pX - width / 2, pY, width, -height / qtd);
    translate(pX, -height / qtd);
  }
  return;
}

function randomColor() {
  return Math.floor(random(0, 255));
}
