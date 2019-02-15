var x = 230;
var y = 220;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
	rect(100, 300, x, 20);
	fill(100,200,100)

  // draw drip
  ellipse(150, y, 10);
	fill(20,10,200)

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 50

  // if invisible for a full “height” amount…
  if (y > 300) {
    // reset
    y = 30;
  }
}


// Acceleration
// Size
// Color
// Multiple drops
// Draw growing pool of water at bottom
