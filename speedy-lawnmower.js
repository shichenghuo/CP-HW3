function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-30-random(h));
  noStroke();

  x = x + 5;

  if (x > width) {
    x = random(10);
    h = h + 15;
  } 

  if (random(-20,1.450) >= 0.999) {
    fill(255);
    rect(0, 0, width, height-20);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
