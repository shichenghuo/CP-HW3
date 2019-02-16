function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 25;
var y = 25;

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(155,255), 100, 100);
  ellipse(x, y, 10);

  // set up next circle
  y = y + 25;

  // if we hit the right edge, go down a line
  if (y > width-25) {
    y = 25;
    x = x + 25;
  }

  // if we hit the bottom edge, reset to top
  if (x > height-5) {
    x = 25;
  }
}

// Change direction to Vertical
// Change the colorspace
// Go backwards
// Change the shape
// Pick a random grid location each time
