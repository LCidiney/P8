const palettes = require("./palettes");

function setup() {
  createCanvas(2000, 1575);
  frameRate(10);
  angleMode(DEGREES);
  sldAngle = createSlider(0, 90, 45, 5);
  sldSize = createSlider(0, 0.75, 0.2, 0.05);
}

function draw() {
  background(21, 43, 60);
  translate(0, height / 2);
  angle = sldAngle.value();

  drawFractal(600);
}

function drawFractal(len, lastColor) {
  if (len < 10) {
    return;
  }

  let colorsR = [89, 240, 228, 227];
  let colorsG = [179, 221, 124, 45];
  let colorsB = [144, 170, 93, 64];
  let choiceColorR = random(colorsR);
  let choiceColorG = random(colorsG);
  let choiceColorB = random(colorsB);

  if (typeof lastColor === "undefined") {
    lastColor = color(choiceColorR, choiceColorG, choiceColorB);
    return lastColor;
  }

  choiceColorR = random(colorsR);
  choiceColorG = random(colorsG);
  choiceColorB = random(colorsB);

  let currentColor = color(choiceColorR, choiceColorG, choiceColorB);

  let interA = lerpColor(lastColor, currentColor, 0.33);
  let interB = lerpColor(lastColor, currentColor, 0.66);

  noStroke();

  fill(lastColor);
  rect(0, 0, 10, -len * 0.25);

  translate(0, -len * 0.25);
  fill(interA);
  rect(0, 0, 10, -len * 0.25);

  translate(0, -len * 0.25);
  fill(interB);
  rect(0, 0, 10, -len * 0.25);

  translate(0, -len * 0.25);
  fill(currentColor);
  rect(0, 0, 10, -len * 0.25);

  lastColor = currentColor;

  translate(0, -len * 0.25);

  push();
  rotate(angle);
  drawFractal(len * sldSize.value(), lastColor);
  pop();

  push();
  rotate(-angle);
  drawFractal(len * sldSize.value(), lastColor);
  pop();
}
