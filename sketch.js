let diam;
let r;
let theta;
let mult = 0;
let points = 200;
let pointsInput;
let factorInput;
let runningCheckBox;
let slider;
let running = true;
function setup() {
  let can = document.getElementById('canvasContainer');
  let canvas = createCanvas(can.clientWidth, can.clientWidth);
  canvas.parent('#canvasContainer');
  diam = height * 0.8;
  theta = 2 * PI / points;
  r = diam/2;
  pointsInput = createInput(points, 'number');
  pointsInput.elt.min = 2;
  pointsInput.elt.max = 500;
  pointsInput.parent('#points');
  pointsInput.input(function() {
    points = +this.value();
    theta = 2 * PI / points;
  });
  factorInput = createInput(0, 'number');
  factorInput.parent('#factor');
  factorInput.input(function() {
    mult = +this.value();
  });
  runningCheckBox = createInput(true, 'checkbox');
  runningCheckBox.elt.checked = true;
  runningCheckBox.parent('#running');
  runningCheckBox.input(function() {
    running = this.elt.checked;
  });
  slider = createSlider(0, 100, 10);
  slider.parent('#speed');
}
function circlePos(t) {
  return {
    x: (r * sin(t) + width/2),
    y: (r * cos(t) + height/2)
  };
}
function draw() {
  background(0);
  stroke(255);
  noFill();
  text('Factor: ' + mult.toFixed(2), 10,20);
  ellipse(width/2,height/2, diam);
  for(let i = 0; i < points; i++) {
    let pos1 = circlePos(theta*(i % points));
    let pos2 = circlePos(theta*(i * mult % points));
    line(pos1.x, pos1.y, pos2.x, pos2.y);
  }
  if(running) {
    mult += map(+slider.value(), 0, 100, 1/600, 1/16);
  }
  if(mult >= points) {
    mult = 0;
  }
}
