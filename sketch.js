let diam;
let r;
let theta;
let mult = 0;
let points = 200;
function setup() {
  createCanvas(800, 600);
  diam = height * 0.8;
  theta = 2 * PI / points;
  r = diam/2;
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
  mult+= 0.006;

  if(mult == 500) {
    mult = 0;
  }
}
