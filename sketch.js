const palettes = require("./palettes");

function setup() {
  createCanvas(1365, 650, WEBGL);
  frameRate(5);
  angleMode(DEGREES);
  sldAngle = createSlider(0, 90, 45, 5);
  sldSize = createSlider(0, 0.75, 0.2, 0.05);
}

function draw() {
  background(21, 43, 60);
  translate(0, height / 2);
  angle = sldAngle.value();
  lastColor = color(89, 179, 144);
  drawFractal(200, lastColor);
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

  firstColor = lastColor;
  lastColor = color(choiceColorR, choiceColorG, choiceColorB);

  let interA = lerpColor(firstColor, lastColor, 0.33);
  let interB = lerpColor(firstColor, lastColor, 0.66);

  noStroke();

  fill(firstColor);
  rect(0 - 5, 0, 10, -len * 0.25);

  translate(0, -len * 0.25);
  fill(interA);
  rect(0 - 5, 0, 10, -len * 0.25);

  translate(0, -len * 0.25);
  fill(interB);
  rect(0 - 5, 0, 10, -len * 0.25);

  translate(0, -len * 0.25);
  fill(lastColor);
  rect(0 - 5, 0, 10, -len * 0.25);

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
/*
function createRect(pX, pY, width, height, qtd) {
  noStroke();

  const palette = selectPalette(paleta_1);
  const firstColor = random(palette);

  fill(firstColor);
  rect(pX - width / 2, pY, width, -height / qtd);

  for (i = 1; i <= qtd; i++) {
    rect(pX - width / 2, pY, width, -height / qtd);
  }
}

function selectPalette(palette) {
  if (palettes.hasOwnProperty(palette)) {
    return palette;
  } else {
    return console.log("Não existe uma paleta com este nome!");
  }
}
  */
